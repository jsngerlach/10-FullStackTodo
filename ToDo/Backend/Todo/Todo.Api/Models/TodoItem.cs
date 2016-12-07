using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todo.Api.Models
{

    public class TodoItem
    {
        public int TodoItemId { get; set; }
        public string Name { get; set; }
        public int Priority { get; set; }
    }
}