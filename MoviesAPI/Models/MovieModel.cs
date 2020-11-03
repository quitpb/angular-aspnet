using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Models
{
    public class MovieModel
    {
        public int Id { get; set; }
        //[Remote("VerifyMovie", "Movies", HttpMethod = "POST", ErrorMessage = "Movie already exists in database.")]
        public string Name { get; set; }
        public string Director { get; set; }
        public string ReleaseDate { get; set; }
        public string Genre { get; set; }
        public string Description { get; set; }

    }

}
