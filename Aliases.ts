// It is a system that let us make custom data type to use it next;
type Profile = {
  name: string;
  email: string;
  isActive: boolean;
};

function createProfile(profile: Profile): Profile {
  return { name: "Test", email: "test@gmail.com", isActive: true };
}
