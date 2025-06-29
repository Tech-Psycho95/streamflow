export interface ContentItem {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  duration: string;
  genre: string;
  genres?: string[]; // Multiple genres
  type?: 'movie' | 'tv' | 'anime';
  description?: string;
}

export const trendingMovies: ContentItem[] = [
  {
    id: 1,
    title: "Deadpool & Wolverine",
    image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    rating: 7.8,
    year: 2024,
    duration: "2h 8m",
    genre: "Action",
    genres: ["Action", "Comedy", "Superhero", "R-Rated"],
    type: 'movie',
    description: "Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy in this irreverent superhero adventure that breaks the fourth wall."
  },
  {
    id: 2,
    title: "Inside Out 2",
    image: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    rating: 7.6,
    year: 2024,
    duration: "1h 36m",
    genre: "Animation",
    genres: ["Animation", "Family", "Comedy", "Coming-of-Age"],
    type: 'movie',
    description: "Riley enters puberty and her emotions face new challenges as Anxiety, Envy, Embarrassment, and Ennui join Joy, Sadness, Anger, Fear, and Disgust in her mind's headquarters."
  },
  {
    id: 3,
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    rating: 8.5,
    year: 2024,
    duration: "2h 46m",
    genre: "Sci-Fi",
    genres: ["Sci-Fi", "Adventure", "Drama", "War"],
    type: 'movie',
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future."
  },
  {
    id: 4,
    title: "Wicked",
    image: "https://image.tmdb.org/t/p/w500/c5Tqxeo1UpBvnAc3csUm7j3hlQl.jpg",
    rating: 8.2,
    year: 2024,
    duration: "2h 40m",
    genre: "Musical",
    genres: ["Musical", "Fantasy", "Drama", "Romance"],
    type: 'movie',
    description: "The untold story of the witches of Oz, focusing on the unlikely friendship between Elphaba and Glinda before they become the Wicked Witch of the West and the Good Witch of the North."
  },
  {
    id: 5,
    title: "Oppenheimer",
    image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    rating: 8.4,
    year: 2023,
    duration: "3h 0m",
    genre: "Biography",
    genres: ["Biography", "Drama", "History", "Thriller"],
    type: 'movie',
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. A biographical thriller that explores the moral complexities of scientific discovery."
  },
  {
    id: 6,
    title: "Spider-Man: Across the Spider-Verse",
    image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    rating: 8.7,
    year: 2023,
    duration: "2h 20m",
    genre: "Animation",
    genres: ["Animation", "Action", "Adventure", "Comedy"],
    type: 'movie',
    description: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
  },
  {
    id: 7,
    title: "Barbie",
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 6.9,
    year: 2023,
    duration: "1h 54m",
    genre: "Comedy",
    genres: ["Comedy", "Adventure", "Fantasy", "Romance"],
    type: 'movie',
    description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans."
  },
  {
    id: 8,
    title: "John Wick: Chapter 4",
    image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    rating: 7.8,
    year: 2023,
    duration: "2h 49m",
    genre: "Action",
    genres: ["Action", "Crime", "Thriller", "Drama"],
    type: 'movie',
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
  },
  {
    id: 9,
    title: "Top Gun: Maverick",
    image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    rating: 8.3,
    year: 2022,
    duration: "2h 11m",
    genre: "Action",
    genres: ["Action", "Drama", "Adventure", "War"],
    type: 'movie',
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice."
  },
  {
    id: 10,
    title: "Avatar: The Way of Water",
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    rating: 7.6,
    year: 2022,
    duration: "3h 12m",
    genre: "Sci-Fi",
    genres: ["Sci-Fi", "Adventure", "Fantasy", "Family"],
    type: 'movie',
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
  },
  {
    id: 11,
    title: "Everything Everywhere All at Once",
    image: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    rating: 7.8,
    year: 2022,
    duration: "2h 19m",
    genre: "Comedy",
    genres: ["Comedy", "Sci-Fi", "Adventure", "Drama"],
    type: 'movie',
    description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have lived."
  },
  {
    id: 12,
    title: "The Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 7.9,
    year: 2022,
    duration: "2h 56m",
    genre: "Action",
    genres: ["Action", "Crime", "Drama", "Mystery"],
    type: 'movie',
    description: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler. A dark and gritty take on the iconic superhero."
  }
];

export const popularTvShows: ContentItem[] = [
  {
    id: 13,
    title: "House of the Dragon",
    image: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    rating: 8.5,
    year: 2022,
    duration: "68m/episode",
    genre: "Fantasy",
    genres: ["Fantasy", "Drama", "Action", "Political"],
    type: 'tv',
    description: "The Targaryen dynasty reaches its peak of power with dragons soaring overhead, but internal family conflicts threaten to tear apart the realm in this epic prequel to Game of Thrones."
  },
  {
    id: 14,
    title: "The Last of Us",
    image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rating: 8.7,
    year: 2023,
    duration: "60m/episode",
    genre: "Drama",
    genres: ["Drama", "Horror", "Thriller", "Post-Apocalyptic"],
    type: 'tv',
    description: "Joel and Ellie navigate a brutal post-apocalyptic world where infected humans roam the earth. Their unlikely partnership becomes humanity's last hope for survival in this emotionally devastating adaptation."
  },
  {
    id: 15,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    rating: 8.1,
    year: 2022,
    duration: "50m/episode",
    genre: "Comedy",
    genres: ["Comedy", "Horror", "Mystery", "Supernatural"],
    type: 'tv',
    description: "Wednesday Addams brings her signature deadpan wit to Nevermore Academy, where she must master her psychic abilities while solving a supernatural mystery that threatens the school."
  },
  {
    id: 16,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    rating: 8.7,
    year: 2016,
    duration: "75m/episode",
    genre: "Sci-Fi",
    genres: ["Sci-Fi", "Horror", "Mystery", "Supernatural"],
    type: 'tv',
    description: "A group of kids in 1980s Indiana uncover government experiments and supernatural forces when their friend disappears into an alternate dimension called the Upside Down."
  },
  {
    id: 17,
    title: "The Bear",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
    rating: 8.7,
    year: 2022,
    duration: "30m/episode",
    genre: "Comedy",
    genres: ["Comedy", "Drama", "Workplace"],
    type: 'tv',
    description: "A world-class chef returns to Chicago to run his deceased brother's Italian beef sandwich shop, battling kitchen chaos, financial troubles, and his own trauma in this intense workplace comedy."
  },
  {
    id: 18,
    title: "Euphoria",
    image: "https://image.tmdb.org/t/p/w500/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg",
    rating: 8.4,
    year: 2019,
    duration: "60m/episode",
    genre: "Drama",
    genres: ["Drama", "Romance", "Teen", "Musical"],
    type: 'tv',
    description: "Rue Bennett struggles with addiction while navigating the complex social dynamics of modern teenage life, including love, identity, and trauma, in this visually stunning and emotionally raw series."
  },
  {
    id: 19,
    title: "The White Lotus",
    image: "https://image.tmdb.org/t/p/w500/gH5i3JbnLsyTvcImlofNvXtH3i5.jpg",
    rating: 7.9,
    year: 2021,
    duration: "60m/episode",
    genre: "Comedy",
    genres: ["Comedy", "Drama", "Mystery", "Satire"],
    type: 'tv',
    description: "Wealthy vacationers and resort staff clash at an exclusive tropical resort, leading to darkly comedic situations that expose the ugly underbelly of privilege and class warfare."
  },
  {
    id: 20,
    title: "Succession",
    image: "https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg",
    rating: 8.8,
    year: 2018,
    duration: "60m/episode",
    genre: "Drama",
    genres: ["Drama", "Comedy", "Political", "Satire"],
    type: 'tv',
    description: "The Roy family controls a global media empire, but when patriarch Logan Roy's health declines, his children engage in a ruthless battle for control of the company and his approval."
  },
  {
    id: 21,
    title: "The Mandalorian",
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    rating: 8.7,
    year: 2019,
    duration: "40m/episode",
    genre: "Sci-Fi",
    genres: ["Sci-Fi", "Adventure", "Action", "Western"],
    type: 'tv',
    description: "A lone Mandalorian bounty hunter travels the outer reaches of the galaxy, protecting a mysterious child with powerful Force abilities while evading Imperial remnants."
  },
  {
    id: 22,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    rating: 8.0,
    year: 2021,
    duration: "60m/episode",
    genre: "Thriller",
    genres: ["Thriller", "Drama", "Horror", "Survival"],
    type: 'tv',
    description: "Desperate contestants compete in deadly children's games for a massive cash prize, revealing the dark side of capitalism and human nature in this Korean survival thriller."
  },
  {
    id: 23,
    title: "The Crown",
    image: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    rating: 8.6,
    year: 2016,
    duration: "58m/episode",
    genre: "Drama",
    genres: ["Drama", "Biography", "History", "Political"],
    type: 'tv',
    description: "An intimate portrayal of Queen Elizabeth II's reign, exploring the personal sacrifices and political challenges faced by the British monarchy through decades of social change."
  },
  {
    id: 24,
    title: "Ozark",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    rating: 8.4,
    year: 2017,
    duration: "60m/episode",
    genre: "Crime",
    genres: ["Crime", "Drama", "Thriller", "Family"],
    type: 'tv',
    description: "Financial advisor Marty Byrde relocates his family to the Missouri Ozarks to launder money for a Mexican cartel, but local criminals and FBI agents complicate his dangerous new life."
  }
];

// Superhero TV Shows
export const superheroTvShows: ContentItem[] = [
  {
    id: 601,
    title: "WandaVision",
    image: "https://image.tmdb.org/t/p/w500/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
    rating: 7.9,
    year: 2021,
    duration: "40m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Mystery", "Comedy", "Drama"],
    type: 'tv',
    description: "Wanda Maximoff and Vision live idealized suburban lives in the town of Westview, but begin to suspect that everything is not as it seems in this mind-bending Marvel series."
  },
  {
    id: 602,
    title: "The Falcon and the Winter Soldier",
    image: "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    rating: 7.2,
    year: 2021,
    duration: "50m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Action", "Drama", "Political"],
    type: 'tv',
    description: "Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience as they fight against a group known as the Flag Smashers."
  },
  {
    id: 603,
    title: "Hawkeye",
    image: "https://image.tmdb.org/t/p/w500/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
    rating: 7.5,
    year: 2021,
    duration: "45m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Action", "Comedy", "Christmas"],
    type: 'tv',
    description: "Clint Barton partners with Kate Bishop, a skilled archer and his biggest fan, to unravel a criminal conspiracy during the Christmas season in New York City."
  },
  {
    id: 604,
    title: "Moon Knight",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vKDUmKO6F9bSKKyHhg7YGbgcEeF.jpg",
    rating: 7.3,
    year: 2022,
    duration: "50m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Psychological", "Horror", "Egyptian Mythology"],
    type: 'tv',
    description: "Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As enemies converge upon them, they must navigate their complex identities while thrust into a mystery among the powerful gods of Egypt."
  },
  {
    id: 605,
    title: "Ms. Marvel",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3HWWh92kZbD7odwJX7nKmXNZsYo.jpg",
    rating: 6.2,
    year: 2022,
    duration: "45m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Coming-of-Age", "Family", "Pakistani-American"],
    type: 'tv',
    description: "Kamala Khan, a Pakistani-American teenager from Jersey City, discovers she has superpowers and must learn to balance her newfound abilities with her family life and cultural identity."
  },
  {
    id: 606,
    title: "She-Hulk: Attorney at Law",
    image: "https://image.tmdb.org/t/p/w500/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
    rating: 5.2,
    year: 2022,
    duration: "35m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Comedy", "Legal", "Fourth Wall Breaking"],
    type: 'tv',
    description: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk."
  },
  {
    id: 607,
    title: "The Boys",
    image: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
    rating: 8.7,
    year: 2019,
    duration: "60m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Dark Comedy", "Satire", "Violence"],
    type: 'tv',
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers in this dark and satirical take on the superhero genre."
  },
  {
    id: 608,
    title: "Invincible",
    image: "https://image.tmdb.org/t/p/w500/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
    rating: 8.7,
    year: 2021,
    duration: "45m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Animation", "Violence", "Coming-of-Age"],
    type: 'tv',
    description: "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father's tutelage."
  },
  {
    id: 609,
    title: "Daredevil",
    image: "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
    rating: 8.6,
    year: 2015,
    duration: "55m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Crime", "Drama", "Martial Arts"],
    type: 'tv',
    description: "Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the superhero Daredevil in Hell's Kitchen, New York City."
  },
  {
    id: 610,
    title: "The Umbrella Academy",
    image: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
    rating: 7.9,
    year: 2019,
    duration: "50m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Comedy", "Drama", "Dysfunctional Family"],
    type: 'tv',
    description: "A dysfunctional family of adopted sibling superheroes reunites to solve the mystery of their father's death and the threat of an impending apocalypse."
  },
  {
    id: 320,
      title: "Loki",
      image: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
      rating: 8.2,
      year: 2021,
      duration: "50m/episode",
      genre: "Sci-Fi",
      genres: ["Sci-Fi", "Superhero", "Time Travel", "Comedy"],
      type: 'tv' as const,
      description: "After stealing the Tesseract, Loki is captured by the Time Variance Authority and forced to help fix timeline anomalies while confronting alternate versions of himself across the multiverse."
  }
];

// Hindi/Indian Movies (2019-2025)
export const hindiMovies: ContentItem[] = [
  {
    id: 701,
    title: "RRR",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ljHw5eIMnki3HekwkKwCCHsRSbH.jpg",
    rating: 7.9,
    year: 2022,
    duration: "3h 7m",
    genre: "Action",
    genres: ["Action", "Drama", "Historical", "Epic"],
    type: 'movie',
    description: "A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s."
  },
  {
    id: 719,
    title: "K.G.F: Chapter 2",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
    rating: 8.2,
    year: 2022,
    duration: "2h 48m",
    genre: "Action",
    genres: ["Action", "Thriller", "Adventure", "Crime"],
    type: 'movie',
    description: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their Savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy."
  },
  {
    id: 720,
    title: "Bāhubali 2: The Conclusion",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xQ22LOWSkClP3maYhR9nZH0dnWM.jpg",
    rating: 8.2,
    year: 2017,
    duration: "2h 47m",
    genre: "Action",
    genres: ["Action", "Fantasy", "Adventure", ],
    type: "movie",
    description: "When Mahendra, the son of Bāhubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."
  },
  {
    id: 702,
    title: "Pathaan",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eYf6FX4q5gB3JxzGsBo22KbRbVG.jpg",
    rating: 6.0,
    year: 2023,
    duration: "2h 26m",
    genre: "Action",
    genres: ["Action", "Thriller", "Spy", "Bollywood"],
    type: 'movie',
    description: "An exiled RAW agent partners with a Pakistani agent to stop a rogue agent who has gone rogue and threatens to destroy India and Pakistan."
  },
  {
    id: 703,
    title: "Jawan",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/n95agYu6FeC5MyiIibbt3MpcJUV.jpg",
    rating: 7.0,
    year: 2023,
    duration: "2h 49m",
    genre: "Action",
    genres: ["Action", "Thriller", "Social", "Vigilante"],
    type: 'movie',
    description: "A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society."
  },
  {
    id: 704,
    title: "Dangal",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
    rating: 8.4,
    year: 2016,
    duration: "2h 41m",
    genre: "Biography",
    genres: ["Biography", "Drama", "Sports", "Wrestling"],
    type: 'movie',
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become world-class wrestlers, challenging societal norms and gender stereotypes."
  },
  {
    id: 705,
    title: "Gully Boy",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4RE7TD5TqEXbPKyUHcn7CSeMlrJ.jpg",
    rating: 7.9,
    year: 2019,
    duration: "2h 33m",
    genre: "Drama",
    genres: ["Drama", "Music", "Hip-Hop", "Coming-of-Age"],
    type: 'movie',
    description: "A street rapper from Mumbai's slums rises to fame through his music, inspired by the underground rap movement and his desire to escape poverty."
  },
  {
    id: 706,
    title: "Article 15",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/egknEWNt2B0slG2OC0gSpLZdVHj.jpg",
    rating: 8.1,
    year: 2019,
    duration: "2h 10m",
    genre: "Crime",
    genres: ["Crime", "Drama", "Social", "Investigation"],
    type: 'movie',
    description: "A young IPS officer investigates the disappearance of three girls from a small UP town, uncovering deep-rooted caste discrimination and social injustice."
  },
  {
    id: 707,
    title: "Shershaah",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zGvFnwoXJKrYnKhoVPytqkqCJ8V.jpg",
    rating: 8.3,
    year: 2021,
    duration: "2h 15m",
    genre: "Biography",
    genres: ["Biography", "War", "Drama", "Patriotic"],
    type: 'movie',
    description: "The life story of Captain Vikram Batra, who was awarded the Param Veer Chakra for his bravery during the 1999 Kargil War."
  },
  {
    id: 708,
    title: "Sooryavanshi",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/oCymRm6FG62zrKnXiHHJvDgkYoA.jpg",
    rating: 5.6,
    year: 2021,
    duration: "2h 25m",
    genre: "Action",
    genres: ["Action", "Crime", "Thriller", "Cop"],
    type: 'movie',
    description: "DCP Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India, tries to bring down a terrorist group planning a deadly attack in Mumbai."
  },
  {
    id: 709,
    title: "83",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gTOMTFUbMxSApPRTuECMrl5RyQ2.jpg",
    rating: 7.5,
    year: 2021,
    duration: "2h 43m",
    genre: "Biography",
    genres: ["Biography", "Sports", "Cricket", "Historical"],
    type: 'movie',
    description: "The story of India's incredible victory at the 1983 Cricket World Cup, led by captain Kapil Dev, which changed Indian cricket forever."
  },
  {
    id: 710,
    title: "Pushpa: The Rise",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/r1yAzVQNbCbPTbB3GZFour9Qr0t.jpg",
    rating: 7.6,
    year: 2021,
    duration: "2h 59m",
    genre: "Action",
    genres: ["Action", "Crime", "Drama", "Telugu"],
    type: 'movie',
    description: "A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business."
  },
  {
    id: 711,
    title: "Gangubai Kathiawadi",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/wHPEKlzg7CaJFCjWlMdZKpCRIDl.jpg",
    rating: 7.0,
    year: 2022,
    duration: "2h 37m",
    genre: "Biography",
    genres: ["Biography", "Drama", "Crime", "Period"],
    type: 'movie',
    description: "The story of Gangubai, a young woman who becomes a powerful figure in the red-light district of Kamathipura in 1960s Mumbai."
  },
  {
    id: 712,
    title: "The Kashmir Files",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/k079zl4TcFVK0n5CypQeYqSkwdU.jpg",
    rating: 8.3,
    year: 2022,
    duration: "2h 50m",
    genre: "Drama",
    genres: ["Drama", "Historical", "Political", "Controversial"],
    type: 'movie',
    description: "A story based on video interviews of the first generation victims of the Kashmiri Pandit genocide, focusing on the exodus of Kashmiri Pandits from Kashmir."
  },
  {
    id: 713,
    title: "Brahmastra: Part One – Shiva",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/x61qdvHIsr9U53FwoLVDQqAGur0.jpg",
    rating: 5.6,
    year: 2022,
    duration: "2h 47m",
    genre: "Fantasy",
    genres: ["Fantasy", "Action", "Adventure", "Mythology"],
    type: 'movie',
    description: "A young man discovers he has a connection to a secret society of guardians who have protected ancient weapons for centuries, and must help prevent a dark force from destroying the world."
  },
  {
    id: 714,
    title: "Vikram Vedha",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8L4vvIQvO8viLw8wyi2slQmU2sW.jpg",
    rating: 6.7,
    year: 2022,
    duration: "2h 38m",
    genre: "Action",
    genres: ["Action", "Crime", "Thriller", "Cat and Mouse"],
    type: 'movie',
    description: "A tough police officer sets out to track down and kill an equally tough gangster, but gets caught in a moral dilemma when the gangster starts telling him stories."
  },
  {
    id: 715,
    title: "Kantara",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/jIsKmkxMzdCZ0Ux1GVSnu8m6Na6.jpg",
    rating: 8.2,
    year: 2022,
    duration: "2h 28m",
    genre: "Action",
    genres: ["Action", "Drama", "Folklore", "Kannada"],
    type: 'movie',
    description: "When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice."
  },
  {
    id: 716,
    title: "Bhediya",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/iZtq44ZmxBW0E3tAeLG6UdJe9aj.jpg",
    rating: 6.7,
    year: 2022,
    duration: "2h 36m",
    genre: "Horror",
    genres: ["Horror", "Comedy", "Supernatural", "Werewolf"],
    type: 'movie',
    description: "Set in the forests of Arunachal Pradesh, Bhediya is a creature comedy that tells the story of Bhaskar, a man who gets bitten by a wolf and begins to transform into the creature."
  },
  {
    id: 717,
    title: "Drishyam 2",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yJNNwHQuKYNeHFbsxSFR6yK9Dda.jpg",
    rating: 8.2,
    year: 2022,
    duration: "2h 20m",
    genre: "Crime",
    genres: ["Crime", "Drama", "Thriller", "Family"],
    type: 'movie',
    description: "7 years after the case related to Vijay Salgaonkar and his family was closed, a series of unexpected events bring truth to light that threatens to change everything for the Salgaonkars."
  },
  {
    id: 718,
    title: "Rocket Boys",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/esNv5JwxVsvu6vZE7bTVeu0mLaA.jpg",
    rating: 8.9,
    year: 2022,
    duration: "60m/episode",
    genre: "Biography",
    genres: ["Biography", "Drama", "Historical", "Science"],
    type: 'tv',
    description: "The story of two extraordinary men, Dr. Homi Jehangir Bhabha and Dr. Vikram Ambalal Sarabhai, who created history while building India's future."
  }
];

export const animeShows: ContentItem[] = [
  {
    id: 25,
    title: "Demon Slayer",
    image: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    rating: 8.7,
    year: 2019,
    duration: "24m/episode",
    genre: "Action",
    genres: ["Action", "Supernatural", "Drama", "Historical"],
    type: 'anime',
    description: "Tanjiro Kamado becomes a demon slayer after his family is slaughtered by demons and his sister Nezuko is transformed into one. His quest for a cure leads him through breathtaking battles and emotional discoveries."
  },
  {
    id: 26,
    title: "Jujutsu Kaisen",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
    rating: 8.6,
    year: 2020,
    duration: "24m/episode",
    genre: "Supernatural",
    genres: ["Supernatural", "Action", "Horror", "School"],
    type: 'anime',
    description: "High schooler Yuji Itadori gains incredible cursed powers after swallowing a demon's finger. He joins Tokyo Jujutsu High to learn to control his abilities and fight the cursed spirits threatening humanity."
  },
  {
    id: 27,
    title: "Attack on Titan",
    image: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    rating: 9.0,
    year: 2013,
    duration: "24m/episode",
    genre: "Action",
    genres: ["Action", "Drama", "Horror", "Military"],
    type: 'anime',
    description: "Humanity's last survivors live behind massive walls to protect themselves from giant humanoid Titans. When the walls are breached, Eren Yeager vows to eliminate every Titan and uncover the truth behind their existence."
  },
  {
    id: 28,
    title: "Spy x Family",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg",
    rating: 8.3,
    year: 2022,
    duration: "24m/episode",
    genre: "Comedy",
    genres: ["Comedy", "Action", "Family", "Slice of Life"],
    type: 'anime',
    description: "Master spy Twilight creates a fake family for his mission, unknowingly adopting a telepathic girl and marrying an assassin. Their secret identities create hilarious situations as they try to maintain their cover."
  },
  {
    id: 29,
    title: "Chainsaw Man",
    image: "https://image.tmdb.org/t/p/w500/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
    rating: 8.4,
    year: 2022,
    duration: "24m/episode",
    genre: "Horror",
    genres: ["Horror", "Action", "Comedy", "Dark Fantasy"],
    type: 'anime',
    description: "Denji merges with his pet devil Pochita to become Chainsaw Man, a devil hunter with chainsaw powers. His simple dreams of a normal life become complicated when he joins a government devil-hunting agency."
  },
  {
    id: 30,
    title: "My Hero Academia",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg",
    rating: 8.5,
    year: 2016,
    duration: "24m/episode",
    genre: "Superhero",
    genres: ["Superhero", "Action", "Comedy", "School"],
    type: 'anime',
    description: "In a world where 80% of people have superpowers called Quirks, Izuku Midoriya is born without any. Despite this, he dreams of becoming a hero and eventually inherits the power of the world's greatest hero."
  },
  {
    id: 31,
    title: "Solo Leveling",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
    rating: 8.6,
    year: 2024,
    duration: "24m/episode",
    genre: "Action",
    genres: ["Action", "Fantasy", "Gaming", "Supernatural"],
    type: 'anime',
    description: "In a world where hunters fight dangerous monsters, Sung Jin-Woo is the weakest E-rank hunter. After a mysterious system grants him the ability to level up, he begins an incredible journey to become the strongest."
  },
  {
    id: 32,
    title: "One Punch Man",
    image: "https://image.tmdb.org/t/p/w500/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg",
    rating: 8.8,
    year: 2015,
    duration: "24m/episode",
    genre: "Comedy",
    genres: ["Comedy", "Action", "Superhero", "Parody"],
    type: 'anime',
    description: "Saitama is a superhero who can defeat any enemy with a single punch, but his overwhelming strength has left him bored and seeking a worthy opponent in this satirical take on superhero tropes."
  },
  {
    id: 33,
    title: "Mob Psycho 100",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg",
    rating: 8.7,
    year: 2016,
    duration: "24m/episode",
    genre: "Supernatural",
    genres: ["Supernatural", "Comedy", "Action", "Coming-of-Age"],
    type: 'anime',
    description: "Shigeo Kageyama, nicknamed Mob, is a powerful psychic trying to live a normal life. Under the guidance of his con-artist mentor, he learns to control his emotions and overwhelming psychic abilities."
  },
  {
    id: 34,
    title: "Vinland Saga",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vUHlpA5c1NXkds59reY3HMb4Abs.jpg",
    rating: 8.8,
    year: 2019,
    duration: "24m/episode",
    genre: "Historical",
    genres: ["Historical", "Drama", "Action", "War"],
    type: 'anime',
    description: "Young Thorfinn seeks revenge against Askeladd, the man who killed his father, while serving in his Viking band. Set in medieval Europe, this epic explores themes of war, revenge, and the search for meaning."
  },
  {
    id: 35,
    title: "Tokyo Ghoul",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1m4RlC9BTCbyY549TOdVQ5NRPcR.jpg",
    rating: 7.8,
    year: 2014,
    duration: "24m/episode",
    genre: "Horror",
    genres: ["Horror", "Supernatural", "Action", "Tragedy"],
    type: 'anime',
    description: "College student Ken Kaneki becomes a half-ghoul after a deadly encounter, forcing him to navigate the dangerous world between humans and flesh-eating ghouls while struggling to maintain his humanity."
  },
  {
    id: 36,
    title: "Death Note",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    rating: 9.0,
    year: 2006,
    duration: "23m/episode",
    genre: "Psychological",
    genres: ["Psychological", "Thriller", "Supernatural", "Mystery"],
    type: 'anime',
    description: "Brilliant student Light Yagami discovers a supernatural notebook that kills anyone whose name is written in it. He begins a twisted campaign to create a perfect world, sparking a deadly game of cat and mouse with detective L."
  }
];

export const newReleases: ContentItem[] = [
  {
    id: 37,
    title: "Gladiator II",
    image: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    rating: 6.8,
    year: 2024,
    duration: "2h 28m",
    genre: "Action",
    genres: ["Action", "Drama", "Historical", "Epic"],
    type: 'movie',
    description: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome."
  },
  {
    id: 38,
    title: "Moana 2",
    image: "https://image.tmdb.org/t/p/w500/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    rating: 7.0,
    year: 2024,
    duration: "1h 40m",
    genre: "Animation",
    genres: ["Animation", "Adventure", "Family", "Musical"],
    type: 'movie',
    description: "Moana journeys to the far seas of Oceania after receiving an unexpected call from her wayfinding ancestors. This epic adventure takes her to dangerous, long-lost waters for an adventure unlike anything she's ever faced."
  },
  {
    id: 39,
    title: "Mufasa: The Lion King",
    image: "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    rating: 6.9,
    year: 2024,
    duration: "1h 58m",
    genre: "Animation",
    genres: ["Animation", "Family", "Drama", "Musical"],
    type: 'movie',
    description: "Told in flashbacks, the story introduces Mufasa as an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion an expansive journey."
  },
  {
    id: 40,
    title: "Sonic the Hedgehog 3",
    image: "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    rating: 7.3,
    year: 2024,
    duration: "1h 49m",
    genre: "Adventure",
    genres: ["Adventure", "Comedy", "Family", "Action"],
    type: 'movie',
    description: "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, they must seek out an unlikely alliance."
  },
  {
    id: 41,
    title: "A Complete Unknown",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/llWl3GtNoXosbvYboelmoT459NM.jpg",
    rating: 7.8,
    year: 2024,
    duration: "2h 21m",
    genre: "Biography",
    genres: ["Biography", "Drama", "Music", "Historical"],
    type: 'movie',
    description: "Set in the influential New York music scene of the early 60s, this film follows 19-year-old Minnesota musician Bob Dylan's meteoric rise as a folk singer to concert halls and the top of the charts."
  },
  {
    id: 42,
    title: "Nosferatu",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
    rating: 7.2,
    year: 2024,
    duration: "2h 12m",
    genre: "Horror",
    genres: ["Horror", "Gothic", "Period", "Supernatural"],
    type: 'movie',
    description: "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake. Robert Eggers' reimagining of the classic vampire tale."
  },
  {
    id: 43,
    title: "Killers of the Flower Moon",
    image: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    rating: 7.6,
    year: 2023,
    duration: "3h 26m",
    genre: "Crime",
    genres: ["Crime", "Drama", "History", "Mystery"],
    type: 'movie',
    description: "Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation involving J. Edgar Hoover. A historical crime epic by Martin Scorsese."
  },
  {
    id: 44,
    title: "Guardians of the Galaxy Vol. 3",
    image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    rating: 7.9,
    year: 2023,
    duration: "2h 30m",
    genre: "Action",
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    type: 'movie',
    description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. The final chapter in the Guardians trilogy."
  }
];

// Anime Movies (Post-2010 Focus)
export const animeMovies: ContentItem[] = [
  {
    id: 45,
    title: "Your Name",
    image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    rating: 8.2,
    year: 2016,
    duration: "1h 46m",
    genre: "Romance",
    genres: ["Romance", "Drama", "Supernatural", "Mystery"],
    type: 'anime',
    description: "Two teenagers from different worlds mysteriously swap bodies and must find each other before a cosmic disaster strikes. This breathtaking tale weaves together love, fate, and the power of human connection across time and space."
  },
  {
    id: 46,
    title: "Demon Slayer: Mugen Train",
    image: "https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    rating: 8.2,
    year: 2020,
    duration: "1h 57m",
    genre: "Action",
    genres: ["Action", "Supernatural", "Drama", "Adventure"],
    type: 'anime',
    description: "Tanjiro and his companions board the Mugen Train to investigate demon attacks. They face their most dangerous enemy yet in this emotional and action-packed continuation of the Demon Slayer saga."
  },
  {
    id: 47,
    title: "Jujutsu Kaisen 0",
    image: "https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
    rating: 7.8,
    year: 2021,
    duration: "1h 45m",
    genre: "Supernatural",
    genres: ["Supernatural", "Action", "Horror", "Romance"],
    type: 'anime',
    description: "Yuta Okkotsu struggles to control the cursed spirit of his childhood friend Rika. This prequel to Jujutsu Kaisen explores the origins of cursed energy and the bonds that transcend death."
  },
  {
    id: 48,
    title: "Suzume",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yStW1TXF5s7Tbtu9KjIZEaWl6HL.jpg",
    rating: 7.7,
    year: 2022,
    duration: "2h 2m",
    genre: "Adventure",
    genres: ["Adventure", "Romance", "Supernatural", "Coming-of-Age"],
    type: 'anime',
    description: "A 17-year-old girl must close doors appearing across Japan to prevent disasters. From the director of Your Name, this is a coming-of-age story about healing, hope, and the power of human connection."
  },
  {
    id: 49,
    title: "Belle",
    image: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/fYHOD4pxZQk4rsP2tQrZI5uBlZV.jpg",
    rating: 7.2,
    year: 2021,
    duration: "2h 1m",
    genre: "Musical",
    genres: ["Musical", "Drama", "Virtual Reality", "Coming-of-Age"],
    type: 'anime',
    description: "Shy teenager Suzu becomes a global sensation as Belle in the virtual world U. When she encounters a mysterious beast, she must find the courage to bridge the gap between her two worlds."
  },
  {
    id: 50,
    title: "Weathering with You",
    image: "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
    rating: 7.5,
    year: 2019,
    duration: "1h 52m",
    genre: "Romance",
    genres: ["Romance", "Drama", "Supernatural", "Coming-of-Age"],
    type: 'anime',
    description: "A runaway teenager meets a girl who can control the weather in rain-soaked Tokyo. Their relationship blossoms as they discover the price of her extraordinary gift and the choices that will determine their future."
  },
  {
    id: 51,
    title: "A Silent Voice",
    image: "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
    rating: 8.1,
    year: 2016,
    duration: "2h 10m",
    genre: "Drama",
    genres: ["Drama", "Romance", "School", "Slice of Life"],
    type: 'anime',
    description: "Former bully Shoya Ishida seeks redemption by reconnecting with Shoko, the deaf classmate he tormented years ago. This profound story explores forgiveness, communication, and the courage to change."
  },
  {
    id: 52,
    title: "The Boy and the Heron",
    image: "https://image.tmdb.org/t/p/w500/f4oZTcfGrVTXKTWg157AwikXqmP.jpg",
    rating: 7.5,
    year: 2023,
    duration: "2h 4m",
    genre: "Fantasy",
    genres: ["Fantasy", "Adventure", "Coming-of-Age", "Family"],
    type: 'anime',
    description: "A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning. Hayao Miyazaki's latest masterpiece."
  }
];