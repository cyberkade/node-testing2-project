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

describe("[GET] /api/songs", () => {
  let res;
  beforeEach(async () => {
    res = await request(server).get("/api/songs");
  });
  it("responds with 200 OK", async () => {
    expect(res.status).toBe(200);
  });
  it("responds with all (18) the songs", async () => {
    expect(res.body).toHaveLength(18);
  });
  it("responds with the correct data structure", async () => {
    const expected = [
      { song_id: 1, song_title: "The Spins" },
      { song_id: 2, song_title: "The Star Room" },
      { song_id: 3, song_title: "Aquarium" },
      { song_id: 4, song_title: "Ascension" },
      { song_id: 5, song_title: "Angel Dust" },
      { song_id: 6, song_title: "Woods" },
      { song_id: 7, song_title: "Circles" },
      { song_id: 8, song_title: "Hand Me Downs" },
      { song_id: 9, song_title: "Hurt Feelings" },
      { song_id: 10, song_title: "Come Back to Earth" },
      { song_id: 11, song_title: "2009" },
      { song_id: 12, song_title: "Empire Ants" },
      { song_id: 13, song_title: "On Melancholy Hill" },
      { song_id: 14, song_title: "Tommorrow Comes Today" },
      { song_id: 15, song_title: "Feel Good Inc." },
      { song_id: 16, song_title: "Amarillo" },
      { song_id: 17, song_title: "Fire Flies" },
      { song_id: 18, song_title: "Dead Butterflies" },
    ];
    expect(res.body).toMatchObject(expected);
  });
});

describe("[POST] /api/songs", () => {
  let res;
  beforeEach(async () => {
    res = await request(server)
      .post("/api/songs")
      .send({ song_title: "I'm Not Real", album_id: 2 });
  });
  it("responds with 201 CREATED", async () => {
    expect(res.status).toBe(201);
  });
  it("causes a song to be added to the db", async () => {
    const songs = await db("songs");
    expect(songs).toHaveLength(19);
  });
  it("responds with the newly created song", () => {});
});
