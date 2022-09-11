let goal = [];
let img = '';

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Believe in yourself and others will too.", "Bide your time, for success is near.", "Do not just think, act!", "Education is the ability to meet life’s situations.", "Love lights up the world."];
      
        // choose random fortune
        let rndmIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[rndmIndex];
    //   console.log(randomFortune)
        res.status(200).send(randomFortune);
    },

    addGoal: (req, res) => {
        console.log(req.body)
        const { newGoal } = req.body
        goal.push(newGoal)
        res.status(200).send(goal);
    },
    getInspiration: (req, res) => {
        res.status(200).send(img);
    },


    changeImage: (req,res) => {
        console.log(req.params.id)
        console.log(req.body.type)
        const {type} = req.body.type
        if(img.src === 'http://www.freak4mypet.com/images/paws_motivational/Motivational_2.jpg'){
        } else 
            img = "http://www.freak4mypet.com/images/paws_motivational/Motivational_1.jpg"
        res.status(200).send(img)
    },
    deleteImage: (req, res) => {
        // let existingImg = req.params
        // console.log(existingImg)
        // for(let i = 0; i<img.length; i++)
        // if(img[i] === existingImg)
        // img.splice(index, 1)
        let img = ``
        res.status(200).send(img)
    }
}