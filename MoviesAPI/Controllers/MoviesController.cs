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

        [HttpGet("add")]
        public async Task<ActionResult<IEnumerable<MovieModel>>> CreateMovieModel()
        {
            return await _context.MovieModel.ToListAsync();
        }

        [HttpPost("add")]
        public async Task<ActionResult<IEnumerable<MovieModel>>> SubmitMovieModel(MovieModel movieModel)
        {
            var processedMovieModel = movieModel;
            processedMovieModel.ReleaseDate = processedMovieModel.ReleaseDate.Remove(10);
            _context.MovieModel.Add(processedMovieModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetMovieModel", new { id = processedMovieModel.Id }, processedMovieModel);
        }

        [HttpPost("delete/{id}")]
        public async Task<ActionResult<IEnumerable<MovieModel>>> DeleteMovieModel(MovieModel  movieModel)
        {
            
            _context.MovieModel.Remove(movieModel);
            await _context.SaveChangesAsync();

            return await _context.MovieModel.ToListAsync();
        }

        [HttpPost("search/{movieTitle}")]
        public  async Task<IEnumerable<MovieModel>> SearchMovie(string movieTitle)
        {

            var movies = from m in _context.MovieModel
                         select m;
            var filter = movies.Where(movie =>  movie.Name.Contains(movieTitle));

            var result = await filter.ToListAsync();

            return  result;
        }

    }
}
