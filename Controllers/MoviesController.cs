using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using my_new_app.Data;
using my_new_app.Models;
using SQLitePCL;


namespace my_new_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {
        private readonly MovieContext _context;
        public MoviesController(MovieContext context)
        {
            _context = context;
        }

        [HttpGet]
        public  async Task<ActionResult<IEnumerable<MovieModel>>> GetMovieModel()
        {
            
            
            return await _context.MovieModel.ToListAsync();
        }

        [HttpGet("{add}")]
        public async Task<ActionResult<IEnumerable<MovieModel>>> CreateMovieModel()
        {
            return await _context.MovieModel.ToListAsync();
        }

        [HttpPost("{add}")]
        public async Task<ActionResult<IEnumerable<MovieModel>>> SubmitMovieModel([FromBody] MovieModel movieModel)
        {
            Console.WriteLine("Server received POST");
            _context.MovieModel.Add(movieModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetMovieModel", new { id = movieModel.Id }, movieModel);
        }

    }
}
