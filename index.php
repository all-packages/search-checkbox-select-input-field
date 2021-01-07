<!DOCTYPE>
<html>
<head>
	<title>Select With Search</title>
	<link href="bootstrap.css" rel="stylesheet" />
    <script src="jquery.min.js"></script>
    <script src="bootstrap.min.js"></script>
    <script src="search-select.min.js"></script>
    <link href="searchSelect.css" rel="stylesheet" />
</head>
<body>
	<div class="col-sm-offset-4 col-sm-3">
		<h3>Select with search</h3>
		<select class="form-control" id="selectData" placeholder="Locations">
			<?php 
				for ($i=1; $i <= 2500; $i++) { 
			
					echo '<option value='.$i.'>'.$i.'a</option>';		
				
				}
			 ?>

		</select>
		<div>
			<table>
				<caption>table title and/or explanatory text</caption>
				<thead>
					<tr>
						<th>header</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>data</td>
					</tr>
				</tbody>
			</table>
		</div>		
	</div>

	<script type="text/javascript">
		$('#selectData').searchSelect();
	</script>
</body>
</html>
