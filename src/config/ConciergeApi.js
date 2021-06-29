import api from ".";

export default {
    // parameter formData yg dikirimkan dari view :
    // var formData = new FormData();
    // const stateObj = {"name" : "test", "age" : 25, "needToUseAt" : "2021-06-21", "favouriteColor" : "Black", "sizeType" : "US", "size" : "S", "city" : "Bandung", "country" : "Indonesia", "budget" : "3000", "waPhoneNumber" : "+628123456789", "email" : "edwin.albert@icloud.com" };
    // formData.append("data", JSON.stringify(stateObj));
    // formData.append("files.imageReference", stateObj.image[0]);

    create: (formData) =>
        api.post(`/concierges`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data),
}