show dbs
use sample_prouduct
db.post.aggregate([{$lookup: {from: "share",
                              localField: "author",
                              foreignField: "name",
                              as: "author_name"}}])
     
     
     
     
     
     
     


