import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const films = [
  {
    title: "Inception",
    description: "A thief who enters the dreams of others must pull off an impossible heist.",
    releaseDate: "2010-07-16T00:00:00.000Z",
    cover:
      "https://occ-0-1722-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5",
  },
  {
    title: "Avatar",
    description:
      "A marine on an alien planet becomes torn between following orders and protecting the world he feels is his home.",
    releaseDate: "2009-12-18T00:00:00.000Z",
    cover: "https://www.geo.tv/assets/uploads/updates/2022-12-17/459124_3259372_updates.jpg",
  },
  {
    title: "Schindler's List",
    description:
      "The story of Oskar Schindler, who saved more than a thousand Polish Jewish refugees during the Holocaust.",
    releaseDate: "1993-12-15T00:00:00.000Z",
    cover:
      "https://occ-0-55-448.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWA-3kY--t0yEqqOcBzm7vfJQxCZinxwXwY_5EyMP2YfuRH7erBIwpveOeShDxLB1JZLFC5FTZkcueKWB3JDXzJxdIIZkILqqbN.jpg?r=9a0",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns about the true nature of his reality and his role in the fight against its controllers.",
    releaseDate: "1999-03-31T00:00:00.000Z",
    cover:
      "https://occ-0-360-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYv3BIULI-EjA9bjCUouY7WdUlaOZMEvtFFv24Adb7zoD6-YiLg_XwpFVuWq4n4BQq8ILA2OaamQoHgZAkPPaiIX01Mp3WGk_f3L.jpg?r=b79",
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.",
    releaseDate: "1994-10-14T00:00:00.000Z",
    cover:
      "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb3siUGgOKTvEsKO3HV58nEejddsl9LwBrMGMldb6wuavUm2kJUjOYlpzFxV03NlQW0XqUGQftXHyyujMc6tBaxtuSR5kGsXSjZm.jpg?r=fbb",
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over the years, finding solace and redemption through acts of common decency.",
    releaseDate: "1994-09-23T00:00:00.000Z",
    cover:
      "https://occ-0-64-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWUAo-FyMXs1OwmgXsGg3bSIDsFTkJWwocpFREOXb8iRiq9WG-stKafO0yEx-QJGSCA9eMVhCa1RYqQLA4Pw9Z9YtmyD2z_-MGJlpMoHBSMkf5xGtqjQvwgP_dGGkdwx-pZVVYxmykwQ-VSVG-etVeQntxaBwdqEppkAO609nK5R4QG2kqEBEV9GaeDhKNrDSgoSUpRPAuwaj2Sn7eFpo32gRvdHU2-uhaxr7gJCJ6Ch5AgCmvkdIcBUE1fjqxJybT-a-wWylio96lDZmsxNGSFrzVQ.jpg?r=dac",
  },
  {
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    releaseDate: "1972-03-24T00:00:00.000Z",
    cover:
      "https://occ-0-395-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9",
  },
  {
    title: "Star Wars: A New Hope",
    description: "A young farm boy joins a band of rebels to take down an oppressive empire.",
    releaseDate: "1977-05-25T00:00:00.000Z",
    cover:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81A736C2B6CC7B7B4A3F2E2381E36542715DFC550F765F49BC0770898DE5F32B/scale?width=1200&aspectRatio=1.78&format=jpeg",
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    releaseDate: "1994-07-06T00:00:00.000Z",
    cover:
      "https://occ-0-64-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcILd1klRSdi7E8AZC8wkqqpkCe-DNrPkzUGGtBYSpz0ep8Jb1P1YlAdRcei4nS-gy3tcuxNvszYSGhi_W-AYwfDnS7CHGD17NIs.jpg?r=4cb",
  },
  {
    title: "The Dark Knight",
    description:
      "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: "2008-07-18T00:00:00.000Z",
    cover:
      "https://occ-0-33-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTQpo96D_Ag7ZsiDNLdWUjM73ShPJR4Xj63AKD9lYKMohCTTYD2RcWfII8TtbNuV3ntf5KIuUkyHXqLJzk-_nyGsVjU5oU2y7pzR.jpg?r=157",
  },
  {
    title: "Spirited Away",
    description:
      "A young girl navigating a world of gods, witches, and spirits after her parents are turned into pigs.",
    releaseDate: "2001-07-20T00:00:00.000Z",
    cover:
      "https://occ-0-33-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSfHQxcoUhV-Hf227L9kYAHKaO1SSSF3zPVbj32Hms4So3BvkdIumM5sbI8JYqo9OCpOuNT_2Ba_T6PFNUYSs-h_rmPjc-4ylcPE.jpg?r=2e8",
  },
  {
    title: "Fight Club",
    description: "An insomniac office worker and a soapmaker form an underground fight club.",
    releaseDate: "1999-10-15T00:00:00.000Z",
    cover: "https://privacytable.com/wp-content/uploads/2021/11/Watch-Fight-Club-on-Netflix.jpeg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "A young hobbit sets out to destroy a powerful ring before it falls into the wrong hands.",
    releaseDate: "2001-12-19T00:00:00.000Z",
    cover:
      "https://occ-0-325-1433.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXKZ0XUQ0vZKYQyBJZCJxKK6NBkKNrGe-vfrNYT-iqoQmFvB__xzCjL1t-kadkmzJ-dZZZmZ-E_bl15M7HDY0Z-wDLmuLDp2Wq4X.jpg?r=91a",
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in search of a new habitable planet.",
    releaseDate: "2014-11-07T00:00:00.000Z",
    cover: "https://frontmediaspot.com/wp-content/uploads/2023/07/Interstellar-3-1200x675.jpg",
  },
  {
    title: "Gladiator",
    description:
      "A betrayed Roman General seeks justice after he is relegated to fighting to the death in the Colosseum.",
    releaseDate: "2000-05-05T00:00:00.000Z",
    cover:
      "https://occ-0-34-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaPVPUhQBZ2y60RQqPDgOq5NU3jxzgPNwAzSl4Nz9IGpMPRVLYsqfSrl4-Cro-1CAF3xkRfmW1AZrubPZj_g6X4hFyM6JlLOF7nL.jpg?r=805",
  },
  {
    title: "Goodfellas",
    description: "The rise and fall of mob associate Henry Hill and his friends over a period from 1955 to 1980.",
    releaseDate: "1990-09-19T00:00:00.000Z",
    cover:
      "https://m.media-amazon.com/images/S/pv-target-images/180965683ea19e4386f073c56509dfc8909a644dc2b0fe590ee9e7b5fe267ca8.jpg",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    description:
      "A man undergoes a medical procedure to have a failed relationship erased from his memory, only to regret it.",
    releaseDate: "2004-03-19T00:00:00.000Z",
    cover:
      "https://occ-0-999-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY8ex66ZvXaDgAxtXGfMkVNU-u-7htl_gfTKFb15DJXhLs4OPG7RWJ63xJfr4a6KlZLInoWJnospZ2BYKLhY3XwlGD-vKm9azKh2.jpg?r=e55",
  },
  {
    title: "Inglourious Basterds",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders converges with a theater owner's vengeful plans for the same.",
    releaseDate: "2009-08-21T00:00:00.000Z",
    cover: "https://ntvb.tmsimg.com/assets/p193875_v_h8_aq.jpg?w=1280&h=720",
  },
  {
    title: "12 Angry Men",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    releaseDate: "1957-04-10T00:00:00.000Z",
    cover: "https://scdn.nflximg.net/images/5334/9735334.jpg",
  },
  {
    title: "La La Land",
    description:
      "A jazz pianist and an aspiring actress fall in love but face difficulties as they become more successful.",
    releaseDate: "2016-12-09T00:00:00.000Z",
    cover:
      "https://occ-0-299-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSFwfbCy6oDzBvMxgqeX5-FaCpydbUhb91GIImVy7UGPtVyCYptevb79FSf0hIWADti4IRhq0SJ8UHKY0ZCUDnnuwbjK9VNINGlE.jpg?r=57a",
  },
];

async function main() {
  for (const film of films) {
    await prisma.film.create({
      data: film,
    });
  }
}

main();
