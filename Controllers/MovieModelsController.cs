using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_new_app.Data;
using my_new_app.Models;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieModelsController : ControllerBase
    {
        private readonly MovieContext _context;

        public MovieModelsController(MovieContext context)
        {
            _context = context;
        }

        // GET: api/MovieModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieModel>>> GetMovieModel()
        {


            return await _context.MovieModel.ToListAsync();
        }

        // GET: api/MovieModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieModel>> GetMovieModel(int id)
        {
            var movieModel = await _context.MovieModel.FindAsync(id);

            if (movieModel == null)
            {
                return NotFound();
            }

            return movieModel;
        }

        // PUT: api/MovieModels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovieModel(int id, MovieModel movieModel)
        {
            if (id != movieModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(movieModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovieModels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MovieModel>> PostMovieModel(MovieModel movieModel)
        {
            _context.MovieModel.Add(movieModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovieModel", new { id = movieModel.Id }, movieModel);
        }

        // DELETE: api/MovieModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MovieModel>> DeleteMovieModel(int id)
        {
            var movieModel = await _context.MovieModel.FindAsync(id);
            if (movieModel == null)
            {
                return NotFound();
            }

            _context.MovieModel.Remove(movieModel);
            await _context.SaveChangesAsync();

            return movieModel;
        }

        private bool MovieModelExists(int id)
        {
            return _context.MovieModel.Any(e => e.Id == id);
        }
    }
}
