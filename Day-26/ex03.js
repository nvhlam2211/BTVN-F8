var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ];
  
  function generateOptions(categories, level = 0) {
    var options = '';
  
    categories.forEach(function(category) {
      var indent = '--|'.repeat(level);
      options += `<option value="${category.id}">${indent}${category.name}</option>`;
  
      if (category.children) {
        options += generateOptions(category.children, level + 1);
      }
    });
    return options;
  }
  var selectHTML = `<select>
  <option value="" selected>Chọn chuyên mục</option>${generateOptions(categories)}</select>`;
  document.write(selectHTML);
  