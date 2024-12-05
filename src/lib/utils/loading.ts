const httpRequestLoadingAffect = (state:boolean) => {
    if(state) {
        console.log("loading opened");
    } else {
        console.log("loading closed");
    }
};

const loading = {
    httpRequestLoadingAffect
};

export default loading;