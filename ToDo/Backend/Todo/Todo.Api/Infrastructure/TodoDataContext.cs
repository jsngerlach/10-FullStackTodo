using System;
using System.Collections.Generic;
using System.Data.Entity;
using Todo.Api.Models;
using System.Linq;
using System.Web;

namespace Todo.Api.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("Todo")
        {

        }

        public IDbSet<TodoItem> TodoItems { get; set; }
    }
}