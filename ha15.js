$("#gitWorkflow").DataTable({
  "ajax" : "ha15table.json",
  "iDisplayLength": 5,
  "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
  "order": [[ 0, "desc" ]]
});


$(".tooltip").tooltipster();