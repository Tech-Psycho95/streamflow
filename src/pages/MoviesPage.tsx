import React from 'react';
import ContentRow from '../components/ContentRow';
import { trendingMovies, newReleases, hindiMovies, ContentItem } from '../data/contentData';

interface MoviesPageProps {
  onNavigate: (page: string) => void;
  myList?: ContentItem[];
  onToggleMyList?: (item: ContentItem) => void;
}

const MoviesPage: React.FC<MoviesPageProps> = ({ onNavigate, myList = [], onToggleMyList }) => {
  // Latest blockbusters and hits (2022-2024 focus)
  const latestBlockbusters = [
    {
      id: 501,
      title: "Beetlejuice Beetlejuice",
      image: "https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
      rating: 7.0,
      year: 2024,
      duration: "1h 44m",
      genre: "Comedy",
      genres: ["Comedy", "Horror", "Fantasy", "Supernatural"],
      type: 'movie' as const,
      description: "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter accidentally opens the portal to the Afterlife."
    },
    {
      id: 502,
      title: "It Ends with Us",
      image: "https://image.tmdb.org/t/p/w500/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg",
      rating: 6.5,
      year: 2024,
      duration: "2h 10m",
      genre: "Romance",
      genres: ["Romance", "Drama", "Domestic Violence", "Adaptation"],
      type: 'movie' as const,
      description: "Lily Bloom's life is turned upside down when she meets neurosurgeon Ryle Kincaid. As their relationship deepens, she must confront her past and make difficult choices about her future."
    },
    {
      id: 503,
      title: "Alien: Romulus",
      image: "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
      rating: 7.2,
      year: 2024,
      duration: "1h 59m",
      genre: "Horror",
      genres: ["Horror", "Sci-Fi", "Thriller", "Space"],
      type: 'movie' as const,
      description: "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe."
    },
    {
      id: 504,
      title: "Bad Boys: Ride or Die",
      image: "https://image.tmdb.org/t/p/w500/oGythE98MYleE6mZlGs5oBGkux1.jpg",
      rating: 6.7,
      year: 2024,
      duration: "1h 55m",
      genre: "Action",
      genres: ["Action", "Comedy", "Crime", "Buddy Cop"],
      type: 'movie' as const,
      description: "After their late police captain is linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name."
    },
    {
      id: 505,
      title: "Twisters",
      image: "https://image.tmdb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
      rating: 6.8,
      year: 2024,
      duration: "2h 2m",
      genre: "Action",
      genres: ["Action", "Adventure", "Disaster", "Thriller"],
      type: 'movie' as const,
      description: "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed."
    },
    {
      id: 506,
      title: "A Quiet Place: Day One",
      image: "https://image.tmdb.org/t/p/w500/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
      rating: 6.9,
      year: 2024,
      duration: "1h 39m",
      genre: "Horror",
      genres: ["Horror", "Thriller", "Sci-Fi", "Prequel"],
      type: 'movie' as const,
      description: "Experience the day the world went quiet in this prequel to the hit franchise. Follow Sam as she must survive in New York City during the initial invasion of the deadly creatures."
    }
  ];

  // Additional movie categories with enhanced multiple genres
  const actionMovies = [
    {
      id: 507,
      title: "Mad Max: Fury Road",
      image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      rating: 8.1,
      year: 2015,
      duration: "2h 0m",
      genre: "Action",
      genres: ["Action", "Adventure", "Post-Apocalyptic", "Thriller"],
      type: 'movie' as const,
      description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to flee from cult leader Immortan Joe and his army in an armored tanker truck, leading to an extended road battle."
    },
    {
      id: 508,
      title: "Mission: Impossible - Dead Reckoning",
      image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      rating: 7.7,
      year: 2023,
      duration: "2h 43m",
      genre: "Action",
      genres: ["Action", "Thriller", "Spy", "Adventure"],
      type: 'movie' as const,
      description: "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins."
    },
    {
      id: 509,
      title: "The Dark Knight",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9.0,
      year: 2008,
      duration: "2h 32m",
      genre: "Action",
      genres: ["Action", "Crime", "Drama", "Superhero"],
      type: 'movie' as const,
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      id: 510,
      title: "Avengers: Endgame",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: 8.4,
      year: 2019,
      duration: "3h 1m",
      genre: "Action",
      genres: ["Action", "Adventure", "Superhero", "Sci-Fi"],
      type: 'movie' as const,
      description: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
    },
    {
      id: 511,
      title: "Black Panther",
      image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      rating: 7.3,
      year: 2018,
      duration: "2h 14m",
      genre: "Action",
      genres: ["Action", "Adventure", "Superhero", "Sci-Fi"],
      type: 'movie' as const,
      description: "T'Challa returns home to the isolated, technologically advanced African nation of Wakanda to serve as his country's new king. However, he soon finds that he is challenged for the throne."
    },
    {
      id: 512,
      title: "Dune",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      rating: 8.0,
      year: 2021,
      duration: "2h 35m",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Adventure", "Drama", "Epic"],
      type: 'movie' as const,
      description: "Paul Atreides leads nomadic tribes in a revolt against the evil Harkonnen oppressors who control the desert planet Arrakis. A mythic and emotionally charged hero's journey."
    }
  ];

  const comedyMovies = [
    {
      id: 513,
      title: "The Grand Budapest Hotel",
      image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
      rating: 8.1,
      year: 2014,
      duration: "1h 39m",
      genre: "Comedy",
      genres: ["Comedy", "Adventure", "Crime", "Period"],
      type: 'movie' as const,
      description: "The adventures of Gustave H, a legendary concierge at a famous European hotel, and Zero Moustafa, the protégé who becomes his most trusted friend."
    },
    {
      id: 514,
      title: "Knives Out",
      image: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
      rating: 7.9,
      year: 2019,
      duration: "2h 10m",
      genre: "Comedy",
      genres: ["Comedy", "Mystery", "Crime", "Whodunit"],
      type: 'movie' as const,
      description: "A detective investigates the death of a patriarch of an eccentric, combative family. A modern take on the classic whodunit with a stellar ensemble cast."
    },
    {
      id: 515,
      title: "Parasite",
      image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      rating: 8.5,
      year: 2019,
      duration: "2h 12m",
      genre: "Comedy",
      genres: ["Comedy", "Thriller", "Drama", "Social Commentary"],
      type: 'movie' as const,
      description: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals."
    },
    {
      id: 516,
      title: "Jojo Rabbit",
      image: "https://image.tmdb.org/t/p/w500/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
      rating: 7.9,
      year: 2019,
      duration: "1h 48m",
      genre: "Comedy",
      genres: ["Comedy", "Drama", "War", "Satire"],
      type: 'movie' as const,
      description: "A young German boy in the Hitler Youth whose hero and imaginary friend is the country's dictator is shocked to discover that his mother is hiding a Jewish girl in their home."
    },
    {
      id: 517,
      title: "The Menu",
      image: "https://image.tmdb.org/t/p/w500/v31MsWhF9WFh7Qooq6xSBbmJxoG.jpg",
      rating: 7.2,
      year: 2022,
      duration: "1h 47m",
      genre: "Comedy",
      genres: ["Comedy", "Horror", "Thriller", "Dark Comedy"],
      type: 'movie' as const,
      description: "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises."
    },
    {
      id: 518,
      title: "Glass Onion: A Knives Out Mystery",
      image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      rating: 7.2,
      year: 2022,
      duration: "2h 19m",
      genre: "Comedy",
      genres: ["Comedy", "Mystery", "Crime", "Sequel"],
      type: 'movie' as const,
      description: "Detective Benoit Blanc travels to Greece to peel back the layers of a mystery involving a new cast of colorful suspects."
    }
  ];

  const horrorMovies = [
    {
      id: 519,
      title: "Hereditary",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
      rating: 7.3,
      year: 2018,
      duration: "2h 7m",
      genre: "Horror",
      genres: ["Horror", "Drama", "Supernatural", "Family Trauma"],
      type: 'movie' as const,
      description: "A grieving family is haunted by tragedy and disturbing secrets. When the grandmother of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets."
    },
    {
      id: 520,
      title: "The Conjuring",
      image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      rating: 7.5,
      year: 2013,
      duration: "1h 52m",
      genre: "Horror",
      genres: ["Horror", "Supernatural", "Mystery", "Based on True Events"],
      type: 'movie' as const,
      description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    },
    {
      id: 521,
      title: "Get Out",
      image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
      rating: 7.7,
      year: 2017,
      duration: "1h 44m",
      genre: "Horror",
      genres: ["Horror", "Thriller", "Mystery", "Social Commentary"],
      type: 'movie' as const,
      description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    {
      id: 522,
      title: "A Quiet Place",
      image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      rating: 7.5,
      year: 2018,
      duration: "1h 30m",
      genre: "Horror",
      genres: ["Horror", "Thriller", "Sci-Fi", "Family"],
      type: 'movie' as const,
      description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
    },
    {
      id: 523,
      title: "Midsommar",
      image: "https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
      rating: 7.1,
      year: 2019,
      duration: "2h 28m",
      genre: "Horror",
      genres: ["Horror", "Drama", "Folk Horror", "Psychological"],
      type: 'movie' as const,
      description: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition."
    },
    {
      id: 524,
      title: "Smile",
      image: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
      rating: 6.5,
      year: 2022,
      duration: "1h 55m",
      genre: "Horror",
      genres: ["Horror", "Psychological", "Supernatural", "Mystery"],
      type: 'movie' as const,
      description: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain."
    }
  ];

  const dramaMovies = [
    {
      id: 525,
      title: "The Shawshank Redemption",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      rating: 9.3,
      year: 1994,
      duration: "2h 22m",
      genre: "Drama",
      genres: ["Drama", "Crime", "Hope", "Friendship"],
      type: 'movie' as const,
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 526,
      title: "Forrest Gump",
      image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      rating: 8.8,
      year: 1994,
      duration: "2h 22m",
      genre: "Drama",
      genres: ["Drama", "Romance", "Comedy", "Historical"],
      type: 'movie' as const,
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
    },
    {
      id: 527,
      title: "The Godfather",
      image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      rating: 9.2,
      year: 1972,
      duration: "2h 55m",
      genre: "Drama",
      genres: ["Drama", "Crime", "Family", "Epic"],
      type: 'movie' as const,
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      id: 528,
      title: "12 Years a Slave",
      image: "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
      rating: 8.1,
      year: 2013,
      duration: "2h 14m",
      genre: "Drama",
      genres: ["Drama", "Biography", "History", "Slavery"],
      type: 'movie' as const,
      description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery."
    },
    {
      id: 529,
      title: "Moonlight",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/rcICfiL9fvwRjoWHxW8QeroLYrJ.jpg",
      rating: 7.6,
      year: 2016,
      duration: "1h 51m",
      genre: "Drama",
      genres: ["Drama", "LGBTQ+", "Mystery"],
      type: 'movie' as const,
      description: "The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality."
    },
    {
      id: 530,
      title: "Nomadland",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/k5XzjWihzum1YgLMlqRDRZDmVMn.jpg",
      rating: 7.3,
      year: 2020,
      duration: "1h 47m",
      genre: "Drama",
      genres: ["Drama", "Road Movie", "Economic Hardship", "Minimalism"],
      type: 'movie' as const,
      description: "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living in a van and working seasonal jobs."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Movies
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the latest blockbusters and timeless classics. From action-packed adventures to 
              intimate dramas, find your next favorite film in our extensive collection.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
        <ContentRow 
          title="Trending Movies" 
          items={trendingMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Latest Blockbusters" 
          items={latestBlockbusters} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Hindi & Indian Cinema" 
          items={hindiMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Action & Adventure" 
          items={actionMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Comedy" 
          items={comedyMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Horror & Thriller" 
          items={horrorMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Drama" 
          items={dramaMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="New Releases" 
          items={newReleases} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
      </main>
    </div>
  );
};

export default MoviesPage;