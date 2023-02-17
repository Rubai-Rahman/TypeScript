// It is a system that let us make custom data type to use it next;
type Profile = {
  name: string;
  email: string;
  isActive: boolean;
};

function createProfile(profile: Profile): Profile {
  return { name: "Test", email: "test@gmail.com", isActive: true };
}

type Guitarist = {
  name: string,
  active?: boolean,
  //ternary operator here let us make the properties optional
  albums: (string|number)[]
}

let jp: Guitarist = {
  name: 'Abir',
  albums:[10,15,16]
}
