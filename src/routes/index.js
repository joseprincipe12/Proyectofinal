const {Router} = require("express");
const router = Router();
const fs = require("node:fs");
const { v4: uuidv4 } = require('uuid');

const json__recetas = fs.readFileSync("src/recetas.json","utf-8");
let recetas = JSON.parse(json__recetas);



router.get("/",(req, res)=>{
    res.render("index.ejs",{
        recetas
    })
})

router.get("/new-entry",(req,res)=>{
    res.render("new-entry.ejs");
} )

router.get("/registro",(req,res)=>{
    res.render("registro.ejs");
} )

router.post("/new-entry",(req, res)=>{
    const {title, autor, image, descripcion, ingredientes,preparacion } = req.body;
    if(!title || !autor || !image || !descripcion || !ingredientes || !preparacion){
        res.status(400).send("Rellena todos los campos");
        return;
    }
    let newReceta = {
        id: uuidv4(),
        title,
        autor, 
        image,
        descripcion,
        ingredientes,
        preparacion
    }
    recetas.push(newReceta);
    
    const json_recetas = JSON.stringify(recetas) //rescribe el array a string 
    fs.writeFileSync("src/recetas.json", json_recetas, "utf-8"); //agrega el nuevo strng a json

    res.redirect("/")
});

router.get("/delete/:id",(req,res)=>{

    recetas = recetas.filter(receta => receta.id != req.params.id);
    const json_recetas = JSON.stringify(recetas) //rescribe el array a string 
    fs.writeFileSync("src/recetas.json", json_recetas, "utf-8"); //agrega el nuevo strng a json

    res.redirect("/")
    // console.log(req.params);
    // res.send("recivido")
})


module.exports =  router;