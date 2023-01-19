
const axios = require('axios');

exports.homeRoutes = (req,res) =>{
    res.render("student/home",{
        viewTitle: "insert student"
    });  
}

exports.list = (req,res) => {
    // Make a get request to/api/student
    axios.get('http://localhost:3000/api/student')
    .then(function(response){
        console.log(response.data)
        res.render('student/list',{student: response.data});
    }) 
    .catch(err =>{
        res.send(err);
    })
}

exports.update = (req,res) => {
    axios.get('http://localhost:3000/api/student',{params:{id:req.query.id}})
      .then(function(studentdata){
        res.render("student/update",{student: studentdata},{
            viewTitle: "update student"
        })
        .catch(err =>{
            res.send(err)
        })
      })
}

/*exports.delete = (req,res)=>{
axios.get('student/delete/:id', (req, res) => {
    Students.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/student/list');
        }
        else { console.log('Error in student delete :' + err); }
    });
})
}*/