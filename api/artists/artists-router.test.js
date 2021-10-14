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

describe("[GET] /api/artists", () => {
  let res;
  beforeEach(async () => {
    res = await request(server).get("/api/artists");
  });
  it("responds with 200 OK", async () => {
    expect(res.status).toBe(200);
  });
  it("responds with all (2) the artists", async () => {
    expect(res.body).toHaveLength(2);
  });
  it("responds with the correct data structure", async () => {
    expect(res.body).toMatchObject([
      { artist_id: 1, artist_name: "Mac Miller" },
      { artist_id: 2, artist_name: "Gorillaz" },
    ]);
  });
});

describe("[POST] /api/artist", () => {
  let res;
  beforeEach(async () => {
    res = await request(server)
      .post("/api/artists")
      .send({ artist_name: "Kid Cudi" });
  });
  it("responds with 201 CREATED", async () => {
    expect(res.status).toBe(201);
  });
  it("causes an artist to be added to the db", async () => {
    const artists = await db("artists");
    expect(artists).toHaveLength(3);
  });
  it("responds with the newly created artist", () => {
    expect(res.body).toMatchSnapshot();
  });
});
