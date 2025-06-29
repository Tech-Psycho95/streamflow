import React from 'react';
import ContentRow from '../components/ContentRow';
import { animeShows, animeMovies, ContentItem } from '../data/contentData';

interface AnimePageProps {
  onNavigate: (page: string) => void;
  myList?: ContentItem[];
  onToggleMyList?: (item: ContentItem) => void;
}

const AnimePage: React.FC<AnimePageProps> = ({ onNavigate, myList = [], onToggleMyList }) => {
  // Latest and trending anime (2020-2024 focus)
  const trendingAnime = [
    {
      id: 401,
      title: "Frieren: Beyond Journey's End",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
      rating: 9.4,
      year: 2023,
      duration: "24m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Drama", "Adventure", "Slice of Life"],
      type: 'anime' as const,
      description: "An immortal elf mage reflects on her past adventures with her now-deceased human companions, embarking on new journeys to understand human emotions and the meaning of life."
    },
    {
      id: 402,
      title: "Cyberpunk: Edgerunners",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/lqcDVZ8pyk08AVftMBildDR3QUK.jpg",
      rating: 8.3,
      year: 2022,
      duration: "25m/episode",
      genre: "Cyberpunk",
      genres: ["Cyberpunk", "Action", "Drama", "Sci-Fi"],
      type: 'anime' as const,
      description: "A street kid trying to survive in Night City becomes an edgerunner - a mercenary outlaw also known as a cyberpunk. Set in the same universe as the video game."
    },
    {
      id: 403,
      title: "Ranking of Kings",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ujMjMUi6z02uOfQEerEDC4rH6aG.jpg",
      rating: 8.4,
      year: 2021,
      duration: "23m/episode",
      genre: "Adventure",
      genres: ["Adventure", "Fantasy", "Coming-of-Age", "Heartwarming"],
      type: 'anime' as const,
      description: "Prince Bojji, born deaf and tiny, is mocked as unfit to rule. But with his friend Kage, he embarks on a journey to become the greatest king, proving that true strength comes from within."
    },
    {
      id: 404,
      title: "Lycoris Recoil",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/hcPLwLGEU4alv9sOWvzSY4IorxV.jpg",
      rating: 7.9,
      year: 2022,
      duration: "24m/episode",
      genre: "Action",
      genres: ["Action", "Slice of Life", "CGDCT", "Friendship"],
      type: 'anime' as const,
      description: "In an alternate Japan, teenage girls work as secret agents called Lycoris to maintain peace. Takina and Chisato form an unlikely partnership while working at a café that's a front for their operations."
    },
    {
      id: 405,
      title: "Blue Lock",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/sTDTy73OYmKY51EK94Mc6AxogzR.jpg",
      rating: 8.1,
      year: 2022,
      duration: "24m/episode",
      genre: "Sports",
      genres: ["Sports", "Competition", "Psychological", "Soccer"],
      type: 'anime' as const,
      description: "300 high school soccer players compete in an intense training program designed to create Japan's ultimate striker. Only one will emerge as the world's greatest egoist on the field."
    },
    {
      id: 406,
      title: "Bocchi the Rock!",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ugNZRg4Dqirjh0p1GhSrRqOi3rb.jpg",
      rating: 8.8,
      year: 2022,
      duration: "24m/episode",
      genre: "Music",
      genres: ["Music", "Comedy", "Slice of Life", "Social Anxiety"],
      type: 'anime' as const,
      description: "Extremely shy Hitori Bocchi dreams of being in a band. When she's recruited by an outgoing drummer, she must overcome her social anxiety to rock out with her new friends."
    }
  ];

  // Modern action anime (Post-2015 focus)
  const actionAnime = [
    {
      id: 407,
      title: "Fullmetal Alchemist: Brotherhood",
      image: "https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
      rating: 9.5,
      year: 2009,
      duration: "24m/episode",
      genre: "Adventure",
      genres: ["Adventure", "Drama", "Military", "Philosophy"],
      type: 'anime' as const,
      description: "Brothers Edward and Alphonse Elric search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment. This epic tale explores sacrifice, morality, and the true cost of power."
    },
    {
      id: 408,
      title: "Hunter x Hunter",
      image: "https://image.tmdb.org/t/p/w500/yWBcBIO9OrF3E85C5Arols6QNnG.jpg",
      rating: 9.0,
      year: 2011,
      duration: "23m/episode",
      genre: "Adventure",
      genres: ["Adventure", "Action", "Friendship", "Coming-of-Age"],
      type: 'anime' as const,
      description: "Young Gon Freecss embarks on a journey to become a Hunter and find his father. Along the way, he forms unbreakable bonds with friends who share his determination and face increasingly dangerous challenges."
    },
    {
      id: 409,
      title: "Mushoku Tensei: Jobless Reincarnation",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg",
      rating: 9.0,
      year: 2021,
      duration: "24m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Isekai", "Drama", "Coming-of-Age"],
      type: 'anime' as const,
      description: "A 34-year-old shut-in is reincarnated into a magical world as Rudeus Greyrat. Given a second chance at life, he vows to live without regrets while mastering magic and forming meaningful relationships."
    },
    {
      id: 410,
      title: "Fire Force",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/Alx1QJZeiweoM0ZVSnJ7PnuqPQx.jpg",
      rating: 7.7,
      year: 2019,
      duration: "24m/episode",
      genre: "Action",
      genres: ["Action", "Supernatural", "Fire", "Military"],
      type: 'anime' as const,
      description: "In a world where people spontaneously combust into flame beings called Infernals, Shinra Kusakabe joins Special Fire Force Company 8 to investigate the phenomenon and uncover a conspiracy."
    },
    {
      id: 411,
      title: "Dr. Stone",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg",
      rating: 8.2,
      year: 2019,
      duration: "24m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Adventure", "Education", "Post-Apocalyptic"],
      type: 'anime' as const,
      description: "After humanity is petrified for thousands of years, genius student Senku Ishigami awakens and uses science to rebuild civilization from scratch in this educational and entertaining adventure."
    },
    {
      id: 412,
      title: "Tokyo Revengers",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/arB3L9pZZBSzUPSC8BEv8c3X0bF.jpg",
      rating: 7.9,
      year: 2021,
      duration: "24m/episode",
      genre: "Action",
      genres: ["Action", "Drama", "Time Travel", "Gang"],
      type: 'anime' as const,
      description: "Takemichi Hanagaki travels back in time to his middle school days to prevent his ex-girlfriend's murder and change the course of his life by infiltrating the Tokyo Manji Gang."
    }
  ];

  const romanceAnime = [
    {
      id: 413,
      title: "Kaguya-sama: Love is War",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5khbC6AuNgnvnoDbjIMKCOhEtIc.jpg",
      rating: 8.4,
      year: 2019,
      duration: "24m/episode",
      genre: "Romance",
      genres: ["Romance", "Comedy", "School", "Psychological"],
      type: 'anime' as const,
      description: "Student council president Miyuki and vice-president Kaguya are both too proud to confess their love, leading to elaborate psychological warfare as they try to make the other confess first."
    },
    {
      id: 414,
      title: "Horimiya",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yxk74s3QHx4K3rKpiPisLLqPJ5J.jpg",
      rating: 8.0,
      year: 2021,
      duration: "23m/episode",
      genre: "Romance",
      genres: ["Romance", "School", "Slice of Life", "Comedy"],
      type: 'anime' as const,
      description: "Popular student Hori and quiet classmate Miyamura discover each other's hidden sides outside of school, leading to an unexpected romance that transforms both of their lives."
    },
    {
      id: 415,
      title: "My Dress-Up Darling",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/A6mxBwvvv63JXZm3xXKv4SugE0L.jpg",
      rating: 8.2,
      year: 2022,
      duration: "24m/episode",
      genre: "Romance",
      genres: ["Romance", "Comedy", "Cosplay", "School"],
      type: 'anime',
      description: "Shy doll-making student Gojo helps popular classmate Marin create cosplay costumes, discovering a shared passion that brings them closer together in unexpected ways."
    },
    {
      id: 416,
      title: "Toradora!",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/jgLSYTAgjQgwBqLEw1bgr8vNxeK.jpg",
      rating: 8.1,
      year: 2008,
      duration: "24m/episode",
      genre: "Romance",
      genres: ["Romance", "Comedy", "School", "Tsundere"],
      type: 'anime' as const,
      description: "Ryuji and Taiga, both with crushes on each other's best friends, team up to help each other in love. But their fake relationship slowly becomes something real and beautiful."
    },
    {
      id: 417,
      title: "Your Lie in April",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/rRjfH3ckTYz8z8aSkJshFL4VyK9.jpg",
      rating: 8.6,
      year: 2014,
      duration: "22m/episode",
      genre: "Music",
      genres: ["Music", "Romance", "Drama", "Tragedy"],
      type: 'anime' as const,
      description: "Former piano prodigy Kousei meets free-spirited violinist Kaori, who helps him rediscover his love for music and life in this emotionally devastating tale of love, loss, and artistic passion."
    },
    {
      id: 418,
      title: "Rent-A-Girlfriend",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6ZpDPUNtVw6UdJoStvVlRZ62yAi.jpg",
      rating: 6.8,
      year: 2020,
      duration: "24m/episode",
      genre: "Romance",
      genres: ["Romance", "Comedy", "Harem", "Drama"],
      type: 'anime' as const,
      description: "After being dumped, college student Kazuya rents a girlfriend through an app, but complications arise when his rental girlfriend Chizuru becomes entangled in his real life and family."
    }
  ];

  const fantasyAnime = [
    {
      id: 419,
      title: "That Time I Got Reincarnated as a Slime",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pzujcdPAoH361NObVrtbA7zACE7.jpg",
      rating: 8.1,
      year: 2018,
      duration: "24m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Isekai", "Comedy", "Adventure"],
      type: 'anime' as const,
      description: "Satoru Mikami is reincarnated as a slime in a fantasy world and gains unique abilities. He builds a nation of monsters while navigating politics and forming alliances in this lighthearted isekai adventure."
    },
    {
      id: 420,
      title: "Re:Zero - Starting Life in Another World",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/aRwmcX36r1ZpR5Xq5mmFcpUDQ8J.jpg",
      rating: 8.2,
      year: 2016,
      duration: "25m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Isekai", "Psychological", "Thriller"],
      type: 'anime' as const,
      description: "Subaru Natsuki is transported to a fantasy world where he discovers he can return to a specific point in time upon death. This dark isekai explores trauma, growth, and the weight of repeated failure."
    },
    {
      id: 421,
      title: "Overlord",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/K8ZUjxaj9F0t3AwJDz8ypzBynM.jpg",
      rating: 7.9,
      year: 2015,
      duration: "24m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Isekai", "Dark Fantasy", "Gaming"],
      type: 'anime' as const,
      description: "When a virtual reality game shuts down, player Momonga finds himself trapped as his undead character. He decides to conquer this new world with his loyal NPC servants in this dark fantasy."
    },
    {
      id: 422,
      title: "The Rising of the Shield Hero",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yjq2n0agGJfmZQ9NpbYIhuBofcq.jpg",
      rating: 7.6,
      year: 2019,
      duration: "24m/episode",
      genre: "Fantasy",
      genres: ["Fantasy", "Isekai", "Adventure", "Drama"],
      type: 'anime' as const,
      description: "Naofumi Iwatani is summoned as the Shield Hero but is betrayed and ostracized. He must overcome prejudice and build strength with his companions to save the world that rejected him."
    },
    {
      id: 423,
      title: "Konosuba - God's blessing on this wonderful world!",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/oRaOeQlwktbGSd2T31FYAcgHZlh.jpg",
      rating: 8.1,
      year: 2016,
      duration: "24m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Fantasy", "Isekai", "Parody"],
      type: 'anime' as const,
      description: "After dying embarrassingly, Kazuma is sent to a fantasy world with the useless goddess Aqua. Together with explosion-obsessed Megumin and masochistic knight Darkness, they form the most dysfunctional party ever."
    },
    {
      id: 424,
      title: "No Game No Life",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/sInjG8ZvZ9iSl2u1xHwgdrihhXz.jpg",
      rating: 8.0,
      year: 2014,
      duration: "24m/episode",
      genre: "Gaming",
      genres: ["Gaming", "Fantasy", "Isekai", "Strategy"],
      type: 'anime' as const,
      description: "Genius gamer siblings Sora and Shiro are transported to a world where everything is decided by games. They must use their gaming skills to unite the sixteen races and challenge the god of games."
    }
  ];

  const sliceOfLifeAnime = [
    {
      id: 425,
      title: "Violet Evergarden",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/61EwFPqc0r1uJo6la49J55F8bQ8.jpg",
      rating: 8.5,
      year: 2018,
      duration: "24m/episode",
      genre: "Drama",
      genres: ["Drama", "Fantasy", "Military", "Emotional"],
      type: 'anime' as const,
      description: "Former child soldier Violet Evergarden becomes an Auto Memory Doll, writing letters for others while learning about human emotions and searching for the meaning of her major's final words."
    },
    {
      id: 426,
      title: "March Comes in Like a Lion",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/sokReNdjEwG2TkdUzJcVnD6sChT.jpg",
      rating: 8.8,
      year: 2016,
      duration: "25m/episode",
      genre: "Drama",
      genres: ["Drama", "Slice of Life", "Shogi", "Coming-of-Age"],
      type: 'anime' as const,
      description: "Professional shogi player Rei Kiriyama struggles with depression and loneliness until he meets the warm Kawamoto family, who help him heal and find his place in the world."
    },
    {
      id: 427,
      title: "A Place Further Than the Universe",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/7FxjyLe7co1U8xLYYkpLbXfkTh1.jpg",
      rating: 8.5,
      year: 2018,
      duration: "24m/episode",
      genre: "Adventure",
      genres: ["Adventure", "Slice of Life", "Friendship", "Coming-of-Age"],
      type: 'anime' as const,
      description: "Four high school girls embark on an expedition to Antarctica, discovering friendship, courage, and the strength to pursue their dreams in this inspiring coming-of-age story."
    },
    {
      id: 428,
      title: "Laid-Back Camp",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fsTqmos9zikrNJfP0uwFsmuZOh.jpg",
      rating: 8.3,
      year: 2018,
      duration: "23m/episode",
      genre: "Slice of Life",
      genres: ["Slice of Life", "Comedy", "Camping", "Friendship"],
      type: 'anime' as const,
      description: "Rin Shima loves solo camping, but when she meets enthusiastic Nadeshiko Kagamihara, she discovers the joy of sharing outdoor adventures and forming lasting friendships around the campfire."
    },
    {
      id: 429,
      title: "K-On!",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/70hf2538UAf7mzzNgvqTlWq6PDf.jpg",
      rating: 7.8,
      year: 2009,
      duration: "24m/episode",
      genre: "Music",
      genres: ["Music", "Comedy", "Slice of Life", "School"],
      type: 'anime' as const,
      description: "Yui Hirasawa joins her high school's light music club to save it from being disbanded. With her friends, she learns to play guitar and discovers the joy of music and friendship."
    },
    {
      id: 430,
      title: "Barakamon",
      image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5biiZSKFkIFRxv6Ny6H6XwzyuKE.jpg",
      rating: 8.3,
      year: 2014,
      duration: "23m/episode",
      genre: "Comedy",
      genres: ["Comedy", "Slice of Life", "Calligraphy", "Rural Life"],
      type: 'anime' as const,
      description: "Young calligrapher Seishuu Handa is exiled to a remote island after punching a critic. There, he discovers new inspiration through the island's quirky residents and carefree children."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://image.tmdb.org/t/p/original/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Anime
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore the captivating world of modern anime. From epic adventures to heartwarming stories, 
              discover the finest animated series and films from Japan and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
        <ContentRow 
          title="Popular Anime Series" 
          items={animeShows} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Trending Now" 
          items={trendingAnime} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Anime Movies" 
          items={animeMovies} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Action & Adventure Series" 
          items={actionAnime} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Romance & Drama Series" 
          items={romanceAnime} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Fantasy & Isekai Series" 
          items={fantasyAnime} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
        <ContentRow 
          title="Slice of Life Series" 
          items={sliceOfLifeAnime} 
          myList={myList}
          onToggleMyList={onToggleMyList}
        />
      </main>
    </div>
  );
};

export default AnimePage;