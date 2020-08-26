import {decorate, observable} from "mobx";


class GiraffeStore{
    giraffes = ["Melman", "Marius"];
    newGiraffe = "hat";

    createGiraffe = async () => {
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: this.newGiraffe,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        let json = await resp.json();
        this.giraffes.push(json.body)
        this.newGiraffe="";

    }
}

decorate(GiraffeStore,{
    giraffes:observable,
    newGiraffe: observable

})

export const giraffeStore = new GiraffeStore();