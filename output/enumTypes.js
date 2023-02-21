"use strict";
//Enum let use used custom properties from a object as a type
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: "test",
};
console.log(response1);
