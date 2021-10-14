const server = require("../server");
const request = require("supertest");
const db = require("../../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("[GET] /api/albums", () => {
  let res;
  beforeEach(async () => {
    res = await request(server).get("/api/albums");
  });
  it("responds with 200 OK", async () => {
    expect(res.status).toBe(200);
  });
  it("responds with all (12) the albums", async () => {
    expect(res.body).toHaveLength(12);
  });
  it("responds with the correct data structure", async () => {
    const expected = [
      { album_title: "K.I.D.S", artist_name: "Mac Miller" },
      {
        album_title: "Watching Movies With The Sound Off",
        artist_name: "Mac Miller",
      },
      { album_title: "GO:OD AM", artist_name: "Mac Miller" },
      { album_title: "Faces", artist_name: "Mac Miller" },
      { album_title: "Circles", artist_name: "Mac Miller" },
      { album_title: "Swimming", artist_name: "Mac Miller" },
      { album_title: "Plastic Beach", artist_name: "Gorillaz" },
      { album_title: "Gorillaz", artist_name: "Gorillaz" },
      { album_title: "Demon Days", artist_name: "Gorillaz" },
      { album_title: "The Fall", artist_name: "Gorillaz" },
      { album_title: "The Now Now", artist_name: "Gorillaz" },
      { album_title: "Song Machine", artist_name: "Gorillaz" },
    ];
    expect(res.body).toMatchObject(expected);
  });
});

describe("[DELETE] /api/album", () => {
  let res;
  beforeEach(async () => {
    res = await request(server).delete(`/api/albums/${9}`);
  });
  it("responds with 200 OK", async () => {
    expect(res.status).toBe(200);
  });
  it("causes an album to be deleted from the db", async () => {
    const albums = await db("albums");
    expect(albums).toHaveLength(11);
  });
  it("responds with how many albums were deleted", () => {
    expect(res.body).toBe(1);
  });
});
