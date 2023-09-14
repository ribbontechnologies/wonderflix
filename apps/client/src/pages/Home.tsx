const films = [
  {
    title: 'Inception',
    description:
      'A thief who enters the dreams of others must pull off an impossible heist.',
    releaseDate: '2010-07-16T00:00:00.000Z',
    director: 'Christopher Nolan',
    directorId: 1,
    actors: ['Leonardo DiCaprio', 'Ellen Page', 'Joseph Gordon-Levitt'],
    cover:
      'https://occ-0-1722-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO7wCHTwNucNkQ1jGsVVQj7mn5HFo28f1JnePEK37bAlWVFUI1hnay7nrEU2TFzBMWAhtjmsltPsos-Z_hxhy9SMU8UQDNiQjws.jpg?r=9d5'
  },
  {
    title: 'Avatar',
    description:
      'A marine on an alien planet becomes torn between following orders and protecting the world he feels is his home.',
    releaseDate: '2009-12-18T00:00:00.000Z',
    director: 'James Cameron',
    directorId: 2,
    actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    cover:
      'https://www.geo.tv/assets/uploads/updates/2022-12-17/459124_3259372_updates.jpg'
  },
  {
    title: "Schindler's List",
    description:
      'The story of Oskar Schindler, who saved more than a thousand Polish Jewish refugees during the Holocaust.',
    releaseDate: '1993-12-15T00:00:00.000Z',
    director: 'Steven Spielberg',
    directorId: 3,
    actors: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    cover:
      'https://occ-0-55-448.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWA-3kY--t0yEqqOcBzm7vfJQxCZinxwXwY_5EyMP2YfuRH7erBIwpveOeShDxLB1JZLFC5FTZkcueKWB3JDXzJxdIIZkILqqbN.jpg?r=9a0'
  },
  {
    title: 'The Matrix',
    description:
      'A computer hacker learns about the true nature of his reality and his role in the fight against its controllers.',
    releaseDate: '1999-03-31T00:00:00.000Z',
    director: 'The Wachowskis',
    directorId: 4,
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    cover:
      'https://occ-0-360-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYv3BIULI-EjA9bjCUouY7WdUlaOZMEvtFFv24Adb7zoD6-YiLg_XwpFVuWq4n4BQq8ILA2OaamQoHgZAkPPaiIX01Mp3WGk_f3L.jpg?r=b79'
  },
  {
    title: 'Pulp Fiction',
    description:
      'The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.',
    releaseDate: '1994-10-14T00:00:00.000Z',
    director: 'Quentin Tarantino',
    directorId: 5,
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    cover:
      'https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb3siUGgOKTvEsKO3HV58nEejddsl9LwBrMGMldb6wuavUm2kJUjOYlpzFxV03NlQW0XqUGQftXHyyujMc6tBaxtuSR5kGsXSjZm.jpg?r=fbb'
  },
  {
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over the years, finding solace and redemption through acts of common decency.',
    releaseDate: '1994-09-23T00:00:00.000Z',
    director: 'Frank Darabont',
    directorId: 6,
    actors: ['Tim Robbins', 'Morgan Freeman'],
    cover:
      'https://occ-0-64-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWUAo-FyMXs1OwmgXsGg3bSIDsFTkJWwocpFREOXb8iRiq9WG-stKafO0yEx-QJGSCA9eMVhCa1RYqQLA4Pw9Z9YtmyD2z_-MGJlpMoHBSMkf5xGtqjQvwgP_dGGkdwx-pZVVYxmykwQ-VSVG-etVeQntxaBwdqEppkAO609nK5R4QG2kqEBEV9GaeDhKNrDSgoSUpRPAuwaj2Sn7eFpo32gRvdHU2-uhaxr7gJCJ6Ch5AgCmvkdIcBUE1fjqxJybT-a-wWylio96lDZmsxNGSFrzVQ.jpg?r=dac'
  },
  {
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    releaseDate: '1972-03-24T00:00:00.000Z',
    director: 'Francis Ford Coppola',
    directorId: 7,
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    cover:
      'https://occ-0-395-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABckMjOU5AhTDaTEnhozhpVUnJ2ji0aBhTINCphY3PPsYHQj6fXrm6_ZTUntxr9rNHeRidYEpBEi_t1R-MDwdwiK8GOws3LqUlcIo.jpg?r=7f9'
  },
  {
    title: 'Star Wars: A New Hope',
    description:
      'A young farm boy joins a band of rebels to take down an oppressive empire.',
    releaseDate: '1977-05-25T00:00:00.000Z',
    director: 'George Lucas',
    directorId: 8,
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    cover:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81A736C2B6CC7B7B4A3F2E2381E36542715DFC550F765F49BC0770898DE5F32B/scale?width=1200&aspectRatio=1.78&format=jpeg'
  },
  {
    title: 'Forrest Gump',
    description:
      'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
    releaseDate: '1994-07-06T00:00:00.000Z',
    director: 'Robert Zemeckis',
    directorId: 9,
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    cover:
      'https://occ-0-64-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcILd1klRSdi7E8AZC8wkqqpkCe-DNrPkzUGGtBYSpz0ep8Jb1P1YlAdRcei4nS-gy3tcuxNvszYSGhi_W-AYwfDnS7CHGD17NIs.jpg?r=4cb'
  },
  {
    title: 'The Dark Knight',
    description:
      'When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    releaseDate: '2008-07-18T00:00:00.000Z',
    director: 'Christopher Nolan',
    directorId: 1,
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    cover:
      'https://occ-0-33-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTQpo96D_Ag7ZsiDNLdWUjM73ShPJR4Xj63AKD9lYKMohCTTYD2RcWfII8TtbNuV3ntf5KIuUkyHXqLJzk-_nyGsVjU5oU2y7pzR.jpg?r=157'
  }
]

export function Home () {
  return (
    <div className='grid gap-5'>
      <h2 className='text-2xl'>Trending now</h2>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3'>
        {films.slice(0, 5).map(film => (
          <li
            key={film.title}
            className='hover:scale-105 transition-transform duration-300'
          >
            <img
              src={film.cover}
              alt={film.title}
              className='object-cover w-full'
            />
          </li>
        ))}
      </ul>

      <h2 className='text-2xl'>Picked for you</h2>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3'>
        {films.slice(5).map(film => (
          <li
            key={film.title}
            className='hover:scale-105 transition-transform duration-300'
          >
            <img
              src={film.cover}
              alt={film.title}
              className='object-cover w-full'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
