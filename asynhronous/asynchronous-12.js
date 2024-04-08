const myName = async () => {
    return "myName";
}
myName();

const myName2 = () => {
    return Promise.resolve("myName");
}
myName2();