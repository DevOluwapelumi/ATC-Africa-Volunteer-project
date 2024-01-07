document.addEventListener('DOMContentLoaded', function () {
    // Get references to elements
    var showEntriesDropdown = document.getElementById('show-entries');
    var leaderboardTable = document.querySelector('.leaderboard-table');

    // Add event listener to dropdown change
    showEntriesDropdown.addEventListener('change', function () {
      // Get the selected value
      var selectedValue = showEntriesDropdown.value;

      // Hide all rows in the table
      var rows = leaderboardTable.querySelectorAll('tr');
      rows.forEach(function (row, index) {
        if (index !== 0) {
          row.style.display = 'none';
        }
      });

      // Show the selected number of rows
      for (var i = 1; i <= selectedValue; i++) {
        if (rows[i]) {
          rows[i].style.display = '';
        }
      }
    });
  });



document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the search input and leaderboard table
    var searchInput = document.getElementById("search");
    var leaderboardTable = document.querySelector(".leaderboard-table");
  
    // Add event listener for input changes in the search bar
    searchInput.addEventListener("input", function () {
      // Get the search query and convert it to lowercase
      var query = searchInput.value.toLowerCase();
  
      // Get all rows in the leaderboard table, excluding the header row
      var rows = leaderboardTable.querySelectorAll("tr:not(:first-child)");
  
      // Loop through each row and hide/show based on the search query
      rows.forEach(function (row) {
        // Get the username cell text content and convert it to lowercase
        var username = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
  
        // Check if the username contains the search query
        var isMatch = username.includes(query);
  
        // Show or hide the row based on the match
        row.style.display = isMatch ? "" : "none";
      });
    });
  });
  