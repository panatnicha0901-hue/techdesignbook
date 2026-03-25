import { Book } from './types';

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2VpwPqVdQR05DqoBNUTIr9VgaNFi_RsbdcwFatQi-qYjduA46VtKb4ahWD43qfZmIKasgB68gwDZLFQVHAtnW3NdnK_0DHxTBuHTe0_ntoP3En8zD2gY8TrCaqmgTvgrxcOyJbGQEk9Y7FIi482RXMmR7l78Nzt7g2x-fvOPf_d16Ud78Lb32g4RYlDQHxgKirtyC_XbXUX9UCjEW8sVdzZWN60LhN-ZdbsALWZfIGUpK8k7_qIM2q0Szw9CTh5Ze6-hCG705N8Q',
    rating: 4.5,
    genres: ['Mystery', 'Thriller'],
    pages: 336,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2019,
    isNew: true
  },
  {
    id: '2',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    description: 'Klara and the Sun, the first novel by Kazuo Ishiguro since he was awarded the Nobel Prize in Literature, tells the story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq4vNznM9GIhTT7moJ-CVm8i21wDIjN4EBI16wNpEUAn7_pNmjVy4dG9l_JXPF5y8ZNPdObP20BvjmL3JLRWayxoLI6-cXDpNcO0vSHfXOU9XnAn-iXAfrhFwutjUZgWiR6XDTBXuFT7HfrC9hgKiSnDWd8lh6gVo3yGpF3a_4UuImAkAo7TAvJX9ATgsWFFGNKiYBtqYiByxWjajC3hanpwdAMMDqa3d8s4vJC1DLv2qgPZNtscmWmtkltLtN0MZTJ2oEHL1weoQ',
    rating: 4.2,
    genres: ['Sci-Fi', 'Fiction'],
    pages: 320,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2021
  },
  {
    id: '3',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    description: 'For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDACa-PkgmWFT7IoHC-rlft_HruAyU9qAxJzwtw9p-hajO-Ry5IyUMhzumKXFb1Qspb8TJruKNvdhLQDCnEIdDhiYAWZwL8LmPcNhJRAzHe-fIUrAW6j-lBJytpTkO4IhDk3aw8hbI7_QZ64W4CRS9HarXdfAMWiKvf4hSiZZyx5CbOeqKv4IK3E5fXfjY5mbbJHNtJege3LuP4b-l_5lqpZcW1oaNMTmiwfTEJG1OShbRD2USLr3GWChVa5m7jJ8vus2t1y0ClOgA',
    rating: 4.8,
    genres: ['Fiction', 'Mystery'],
    pages: 384,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2018,
    isEditorsChoice: true,
    progress: 65
  },
  {
    id: '4',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF7Wy2pUiYMWt7KM3mpOXtBytOvZTNwWPkeWbszvIF1q7-qJjsYoFNItJD2xVaia8iauCwGTrg6zQBKR0xIcJnXnhVo8zqfviEhGWOZmS2ot_z3XnaOi-ThuFcLccIzUgvHUVAv-qHL3U29zSp-QWCtr9kuDwkDzL6odH-LNofdTHOqKGmnlmLdfSGn5IL0j76gZiHXG_AOTp0zEklzPycoZAWCAoV8VUElwmtScJrtM3nivELv7xPeX7IxHbcDFFEoMiRVYJe1qo',
    rating: 4.4,
    genres: ['Fiction', 'Classic'],
    pages: 180,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 1925
  },
  {
    id: '5',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxQpjszdrMVeYIHEamaO5TH1bJwEcNdXD9_lL5oCiWqaNVTc9tZ6LPLzd_-diXlBeWd4ndNUbe9Cy-dN0deMzOtWF3ujx64zyKuLl3sWOqg1wMV19Knf6774oEQ1qOri7KNnekna7v2a1CUO_p-4BwyoIcWKWF9126TcVHE7vOEttRUCxsfosfgZrfO5IYnrSc-9yhFeN_VYgIj5y0ypYTlyWjPK_1m2rI9YEu6Fmjr-murmrlAosfXdXz8nmsYelKeqXl3u9IUXY',
    rating: 4.7,
    genres: ['Sci-Fi', 'Adventure'],
    pages: 476,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2021
  },
  {
    id: '6',
    title: 'Circe',
    author: 'Madeline Miller',
    description: 'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and tame gods themselves.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATTIJkbtH6_aW2rkCIWDe4Qok9PxJX0IjUSZrM1gzqd4cpsDAsjdjWT4vB_YkiBSCfKRn01HG9UE9HfFjT7Yk6sQDUQ9tGlmNtDI11YVmM---OQANry0WHpbfIIJqO_iQkr10ByCoN4BaIrkP8lqtxgcVeCWJGnoj53kZy77ra8yORHM7eOGZOu0knP1fLrZvM9x7U0wbiV9kc9MZxmx_FizNhUI6FaPXv4hhhCPbdiyRj4TN0LpdtweE_6Tf3Dp1xlrTAxKPDevA',
    rating: 4.6,
    genres: ['Fantasy', 'Fiction'],
    pages: 393,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2018
  },
  {
    id: '7',
    title: 'The Quiet Art of Belonging',
    author: 'Elena Thorne',
    description: 'In a world that never stops shouting, Elena Thorne invites us into the hushed corners of the human experience. "The Quiet Art of Belonging" is more than a book; it is a guided meditation on finding one\'s place within the digital and physical noise of the 21st century.\n\nThrough a series of evocative essays and tactile observations, Thorne explores how the spaces we inhabit—both our homes and our minds—shape our capacity for connection. This editorial masterpiece challenges the standard "hustle" narrative, offering instead a soft pastel lens through which to view our daily rituals.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaqNoGGmmx3LyL3y7pXJOhtAp_Cpeq7_JzWr9PptLM6mY_5rSP4XZZgADxg2uwpPRL_UmFE9XnF3T7USQNU3tQH8sKmmRdO5dgb9wruSr_ry7U7KliMsPdEAv3geUiSKKXAyEnLyYSs9C9MrRA-Q3DSzj1wRVHZfRgUveO-VBXhLGz7aOdUDfoN087_78HdlHr_G3smIl2xXPhdOSI1DuuntXhFUnTxrWDnkAgj0GVjK_wlLT3b9uIwLnzOfz8JWiSmk822AP4sGA',
    rating: 4.8,
    genres: ['Philosophy', 'Self-Discovery', 'Minimalism'],
    pages: 312,
    format: 'Hardcover',
    language: 'English',
    publishedYear: 2024
  }
];
