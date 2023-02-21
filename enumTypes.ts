//Enum let use used custom properties from a object as a type

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}
const response1: APIResponse<string> = {
  status: 200,
  type: RType.UNAUTHENTICATED,
  data: "test",
};
console.log(response1);
