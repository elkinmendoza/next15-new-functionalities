export type User = {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hobbies: string[];
  friends: {
    id: number;
    name: string;
  }[];
  preferences: {
    theme: string;
    emailNotifications: boolean;
    language: string;
    timezone: string;
  };
  profile: {
    bio: string;
    website: string;
    socialMedia: {
      twitter: string;
      github: string;
    };
  };
};

export const users: User[] = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    email: "john.doe@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    hobbies: ["reading", "traveling", "gaming"],
    friends: [
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Mike Johnson" },
    ],
    preferences: {
      theme: "dark",
      emailNotifications: true,
      language: "en-US",
      timezone: "America/New_York",
    },
    profile: {
      bio: "Software developer with a passion for coding.",
      website: "https://johndoe.dev",
      socialMedia: {
        twitter: "@johndoe",
        github: "johndoe",
      },
    },
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Smith",
    },
    email: "jane.smith@example.com",
    age: 32,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
    hobbies: ["painting", "hiking", "photography"],
    friends: [
      { id: 1, name: "John Doe" },
      { id: 3, name: "Mike Johnson" },
    ],
    preferences: {
      theme: "light",
      emailNotifications: false,
      language: "en-GB",
      timezone: "America/Los_Angeles",
    },
    profile: {
      bio: "Graphic designer and nature enthusiast.",
      website: "https://janesmith.art",
      socialMedia: {
        twitter: "@janesmith",
        github: "janesmith",
      },
    },
  },
  {
    id: 3,
    name: {
      first: "Mike",
      last: "Johnson",
    },
    email: "mike.johnson@example.com",
    age: 35,
    address: {
      street: "789 Oak St",
      city: "Chicago",
      state: "IL",
      zip: "60601",
    },
    hobbies: ["cycling", "cooking", "blogging"],
    friends: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
    preferences: {
      theme: "dark",
      emailNotifications: true,
      language: "en-US",
      timezone: "America/Chicago",
    },
    profile: {
      bio: "Food blogger and cycling enthusiast.",
      website: "https://mikejohnson.blog",
      socialMedia: {
        twitter: "@mikejohnson",
        github: "mikejohnson",
      },
    },
  },
];
