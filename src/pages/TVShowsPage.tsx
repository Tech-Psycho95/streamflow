import React from 'react';
import ContentRow from '../components/ContentRow';
import { popularTvShows, superheroTvShows, ContentItem } from '../data/contentData';

interface TVShowsPageProps {
  onNavigate: (page: string) => void;
  myList?: ContentItem[];
  onToggleMyList?: (item: ContentItem) => void;
}

const TVShowsPage: React.FC<TVShowsPageProps> = ({ onNavigate, myList = [], onToggleMyList }) => {
  // Latest and most popular TV shows (2020-2024 focus)
  const latestHits = [
    {
      id: 301,
      title: "The Lord of The Rings - Rings of Power",
      image: "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
      rating: 6.9,
      year: 2022,
      duration: "70m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Adventure", "Drama", "Epic"],
      type: 'tv' as const,
      description: "Beginning in a time of relative peace, this epic drama follows an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth in the Second Age of Middle-earth."
    },
    {
      id: 302,
      title: "Andor",
      image: "https://image.tmdb.org/t/p/w500/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
      rating: 8.4,
      year: 2022,
      duration: "45m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Drama", "Action", "Political"],
      type: 'tv' as const,
      description: "The tale of the burgeoning rebellion against the Empire and how people and planets became involved. It's an era filled with danger, deception and intrigue where Cassian will embark on the path that is destined to turn him into a rebel hero."
    },
    {
      id: 303,
      title: "The Witcher",
      image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      rating: 8.2,
      year: 2019,
      duration: "60m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Action", "Adventure", "Drama"],
      type: 'tv' as const,
      description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. But when destiny hurtles him toward a powerful sorceress, and a young princess with a dangerous secret, the three must learn to navigate the increasingly volatile Continent together."
    },
    {
      id: 304,
      title: "Heartstopper",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/dQc0QbDiHjGmWxTfKtBgYtS4bj5.jpg",
      rating: 8.6,
      year: 2022,
      duration: "30m/episode",
      genre: "Romance",
      genres: ["Romance", "LGBTQ+", "Teen", "Coming-of-Age"],
      type: 'tv' as const,
      description: "Teens Charlie and Nick discover their unlikely friendship might be something more as they navigate school and young love in this coming-of-age series based on Alice Oseman's webcomic."
    },
    {
      id: 305,
      title: "Only Murders in the Building",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/bZubW4eLAk2zqk44fSWRDTFfcba.jpg",
      rating: 8.1,
      year: 2021,
      duration: "35m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Mystery", "Crime", "Dark Comedy"],
      type: 'tv' as const,
      description: "Three strangers who share an obsession with true crime podcasts suddenly find themselves wrapped up in one when a grisly murder occurs in their apartment building."
    },
    {
      id: 306,
      title: "The Summer I Turned Pretty",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/A7ziP4QaTRAwWqGhHyknN5UULlf.jpg",
      rating: 7.4,
      year: 2022,
      duration: "50m/episode",
      genre: "Romance",
      genres: ["Romance", "Teen", "Drama", "Coming-of-Age"],
      type: 'tv' as const,
      description: "A love triangle between one girl and two brothers. A story about first love, first heartbreak, and the magic of that one perfect summer."
    }
  ];

  const dramaShows = [
    {
      id: 307,
      title: "Better Call Saul",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg",
      rating: 8.8,
      year: 2015,
      duration: "47m/episode",
      genre: "Drama",
      genres: ["Drama", "Crime", "Legal", "Dark Comedy"],
      type: 'tv' as const,
      description: "Jimmy McGill's transformation into criminal lawyer Saul Goodman unfolds in this gripping prequel to Breaking Bad, exploring moral compromise and the price of ambition in the legal world."
    },
    {
      id: 308,
      title: "Yellowstone",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/s4QRRYc1V2e68Qy9Wel9MI8fhRP.jpg",
      rating: 8.7,
      year: 2018,
      duration: "60m/episode",
      genre: "Drama",
      genres: ["Drama", "Western", "Family", "Political"],
      type: 'tv' as const,
      description: "John Dutton fights to protect his family's Montana ranch from land developers, politicians, and Native American reservations in this modern western drama about legacy and power."
    },
    {
      id: 309,
      title: "The Queen's Gambit",
      image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
      rating: 8.5,
      year: 2020,
      duration: "60m/episode",
      genre: "Drama",
      genres: ["Drama", "Chess", "Addiction", "Coming-of-Age"],
      type: 'tv' as const,
      description: "Orphaned chess prodigy Beth Harmon battles addiction while rising through the male-dominated world of competitive chess in 1960s America, seeking both victory and personal redemption."
    },
    {
      id: 310,
      title: "Mare of Easttown",
      image: "https://image.tmdb.org/t/p/w500/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg",
      rating: 8.4,
      year: 2021,
      duration: "60m/episode",
      genre: "Crime",
      genres: ["Crime", "Mystery", "Small Town", "Limited Series"],
      type: 'tv' as const,
      description: "Detective Mare Sheehan investigates a local murder while dealing with personal tragedies in her Pennsylvania hometown, uncovering dark secrets that threaten to destroy her community."
    },
    {
      id: 311,
      title: "Bridgerton",
      image: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
      rating: 7.3,
      year: 2020,
      duration: "60m/episode",
      genre: "Romance",
      genres: ["Romance", "Period", "Drama", "Regency"],
      type: 'tv' as const,
      description: "In Regency-era London, the Bridgerton family navigates love, scandal, and social expectations while a mysterious gossip columnist chronicles their every move in this lavish period romance."
    },
    {
      id: 312,
      title: "1899",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qmpUDEgZawIlDU5HP3IJ9HjnpI3.jpg",
      rating: 7.9,
      year: 2022,
      duration: "60m/episode",
      genre: "Mystery",
      genres: ["Mystery", "Sci-Fi", "Horror", "Multilingual"],
      type: 'tv' as const,
      description: "Multinational immigrants traveling from the old continent to the new encounter a nightmarish riddle aboard a second ship adrift on the open sea. From the creators of Dark."
    }
  ];

  const comedyShows = [
    {
      id: 313,
      title: "Ted Lasso",
      image: "https://image.tmdb.org/t/p/w500/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg",
      rating: 8.8,
      year: 2020,
      duration: "30m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Sports", "Feel-Good", "Drama"],
      type: 'tv' as const,
      description: "American football coach Ted Lasso moves to England to manage a struggling soccer team, winning hearts with his relentless optimism and folksy wisdom despite knowing little about the sport."
    },
    {
      id: 314,
      title: "Abbott Elementary",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7bZwZ1of6HCUarYoJDIivzk9h2G.jpg",
      rating: 8.0,
      year: 2021,
      duration: "22m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Mockumentary", "Education", "Workplace"],
      type: 'tv' as const,
      description: "Dedicated teachers at an underfunded Philadelphia elementary school work tirelessly to give their students the best education possible despite limited resources and bureaucratic obstacles."
    },
    {
      id: 315,
      title: "What We Do in the Shadows",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wa3ZQE9kLnqwN3vQ0NNjg1NPsCa.jpg",
      rating: 8.6,
      year: 2019,
      duration: "30m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Horror", "Mockumentary", "Supernatural"],
      type: 'tv' as const,
      description: "Four vampire roommates navigate modern life in Staten Island while dealing with supernatural politics, human familiars, and the challenges of immortality in this mockumentary comedy."
    },
    {
      id: 316,
      title: "Hacks",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ulBzMy5DZjBeUo6wHqn8ao0Zn6j.jpg",
      rating: 8.2,
      year: 2021,
      duration: "30m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Drama", "Generational", "Show Business"],
      type: 'tv' as const,
      description: "A dark mentorship forms between Deborah Vance, a legendary Las Vegas entertainer, and an entitled, outcast 25-year-old comedy writer. An unlikely friendship that changes both their lives."
    },
    {
      id: 317,
      title: "The Good Place",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qIhsuhoIYR5yTnDta0IL4senbeN.jpg",
      rating: 8.2,
      year: 2016,
      duration: "22m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Philosophy", "Afterlife", "Ethics"],
      type: 'tv' as const,
      description: "Eleanor Shellstrop finds herself in the Good Place after death, but realizes she doesn't belong there. With help from ethics professor Chidi, she tries to become a better person."
    },
    {
      id: 318,
      title: "Reservation Dogs",
      image: "https://image.tmdb.org/t/p/w500/t6hqwD5oQRGgNrZKN71BQYxteC1.jpg",
      rating: 8.2,
      year: 2021,
      duration: "30m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Coming-of-Age", "Indigenous", "Small Town"],
      type: 'tv' as const,
      description: "Four Indigenous teenagers in rural Oklahoma spend their days committing crimes and trying to get to California. A groundbreaking comedy about friendship, identity, and finding your place in the world."
    }
  ];

  const sciFiShows = [
    {
      id: 319,
      title: "Severance",
      image: "https://image.tmdb.org/t/p/w500/lFf6LLrQjYldcZItzOkGmMMigP7.jpg",
      rating: 8.7,
      year: 2022,
      duration: "60m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Thriller", "Workplace", "Psychological"],
      type: 'tv' as const,
      description: "Employees at Lumon Industries undergo a procedure that separates their work and personal memories, creating two distinct personalities that never meet until cracks begin to appear in the system."
    },
    {
      id: 321,
      title: "Black Mirror",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
      rating: 8.8,
      year: 2011,
      duration: "60m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Anthology", "Dystopian", "Technology"],
      type: 'tv' as const,
      description: "Each standalone episode explores the dark side of technology and social media, revealing how our digital obsessions might reshape society in disturbing and unexpected ways."
    },
    {
      id: 322,
      title: "Foundation",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tg9I5pOY4M9CKj8U0cxVBTsm5eh.jpg",
      rating: 7.3,
      year: 2021,
      duration: "60m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Space Opera", "Epic", "Political"],
      type: 'tv' as const,
      description: "A complex saga of humans scattered on planets throughout the galaxy all living under the rule of the Galactic Empire. Based on Isaac Asimov's groundbreaking series of stories."
    },
    {
      id: 323,
      title: "Raised by Wolves",
      image: "https://image.tmdb.org/t/p/w500/mTvSVKMn2Npf6zvYNbGMJnYLtvp.jpg",
      rating: 7.5,
      year: 2020,
      duration: "50m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Horror", "Religious", "AI"],
      type: 'tv' as const,
      description: "Two androids are tasked with raising human children on a mysterious virgin planet. As the burgeoning colony of humans threatens to be torn apart by religious differences, the androids learn that controlling the beliefs of humans is a treacherous and difficult task."
    },
    {
      id: 324,
      title: "The Peripheral",
      image: "https://image.tmdb.org/t/p/w500/ccBe5BVeibdBEQU7l6P6BubajWV.jpg",
      rating: 7.2,
      year: 2022,
      duration: "60m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Cyberpunk", "Time Travel", "Virtual Reality"],
      type: 'tv' as const,
      description: "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own. Based on William Gibson's novel."
    }
  ];

  const crimeShows = [
    {
      id: 325,
      title: "Dahmer – Monster: The Jeffrey Dahmer Story",
      image: "https://image.tmdb.org/t/p/w500/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
      rating: 8.2,
      year: 2022,
      duration: "60m/episode",
      genre: "Crime",
      genres: ["Crime", "Biography", "Horror", "Limited Series"],
      type: 'tv' as const,
      description: "The story of one of America's most notorious serial killers, largely told from the point of view of his victims, and dives deeply into the police incompetence that allowed the Wisconsin native to go on a killing spree."
    },
    {
      id: 326,
      title: "The Night Agent",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4c5yUNcaff4W4aPrkXE6zr7papX.jpg",
      rating: 7.5,
      year: 2023,
      duration: "50m/episode",
      genre: "Thriller",
      genres: ["Thriller", "Action", "Political", "Conspiracy"],
      type: 'tv' as const,
      description: "While monitoring an emergency line, a vigilant FBI agent answers a call that plunges him into a deadly conspiracy involving a mole at the White House."
    },
    {
      id: 327,
      title: "Mindhunter",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fbKE87mojpIETWepSbD5Qt741fp.jpg",
      rating: 8.6,
      year: 2017,
      duration: "54m/episode",
      genre: "Crime",
      genres: ["Crime", "Psychological", "FBI", "Serial Killers"],
      type: 'tv' as const,
      description: "FBI agents Holden Ford and Bill Tench interview imprisoned serial killers to solve ongoing cases, pioneering criminal psychology and profiling techniques in late 1970s America."
    },
    {
      id: 328,
      title: "Money Heist",
      image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      rating: 8.2,
      year: 2017,
      duration: "70m/episode",
      genre: "Crime",
      genres: ["Crime", "Thriller", "Heist", "Spanish"],
      type: 'tv' as const,
      description: "A criminal mastermind known as The Professor orchestrates the perfect heist at the Royal Mint of Spain while engaging in a psychological battle with negotiator Raquel Murillo."
    },
    {
      id: 329,
      title: "Peaky Blinders",
      image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
      rating: 8.8,
      year: 2013,
      duration: "60m/episode",
      genre: "Crime",
      genres: ["Crime", "Period", "Gang", "British"],
      type: 'tv' as const,
      description: "In post-WWI Birmingham, the Shelby crime family, led by the ambitious Tommy Shelby, expands their betting shop business while navigating political intrigue and rival gangs."
    },
    {
      id: 330,
      title: "True Detective",
      image: "https://image.tmdb.org/t/p/w500/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg",
      rating: 8.9,
      year: 2014,
      duration: "55m/episode",
      genre: "Crime",
      genres: ["Crime", "Mystery", "Anthology", "Psychological"],
      type: 'tv' as const,
      description: "Each season follows different detectives investigating complex cases that test their sanity and morality, exploring themes of time, memory, and the darkness that lurks in human nature."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              TV Shows
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Binge-watch the latest and greatest TV series from around the world. From epic fantasies to 
              intimate dramas, discover your next obsession.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
        <ContentRow 
          title="Popular TV Shows" 
          items={popularTvShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Superhero Series" 
          items={superheroTvShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Latest Hits" 
          items={latestHits} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Drama Series" 
          items={dramaShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Comedy Series" 
          items={comedyShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Sci-Fi & Fantasy" 
          items={sciFiShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Crime & Mystery" 
          items={crimeShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
      </main>
    </div>
  );
};

export default TVShowsPage;