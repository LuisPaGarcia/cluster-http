/*html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script type="javascript/text" src="../src/js/pdfobject.min.js"></script>
  <title>Batchbuilder Uploader</title>
</head>

<body>  
  <div class="container-upload">
    <h1>Batchbuilder Uploader</h1>
    <form id="uploadForm" enctype="multipart/form-data" method="post" onsubmit="return false;">
      <div class="upload-box">

        <label class="btn btn-primary btn-lg btn-block col-3 choose-files-button">
          Choose csv files <input type="file" style="display: none;"accept=".csv" id="files" name="files" multiple>
        </label>

        <span id="status"></span>
        <table id="selectedFiles" class="table table-hover  table-files">
        </table>

        <button id="uploadButton" onclick="wait5seconds()" type="button" class="btn btn-primary btn-lg btn-block uploadButton col-6" style="display:none">
          Upload files
        </button>

      </div>
    </form>

  </div>
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="../src/css/style.css">
  <script src="jquery-3.2.1.slim.min.js"></script>
  <script src="popper.min.js"></script>
  <script src="bootstrap.min.js"></script>
  <script src="../src/js/uploader_app.js"></script>
</body>

</html>

*/

  
 ;
(function() {

  var selDiv = "";
  document.addEventListener("DOMContentLoaded", init, false);

  function init() {
    document.querySelector('#files').addEventListener('change', handleFileSelect, false);
    selDiv = document.querySelector("#selectedFiles");
  }

  function showUploadButton(filesQ) {
    var uploadButton = document.getElementById('uploadButton');
    if (filesQ == 0) {
      uploadButton.style.display = 'none';
      return 'none';
    } else {
      uploadButton.style.display = 'block';
      document.addEventListener('click', function() {
        // Call uploader
      });
      return 'inline';
    }
  }

  function handleFileSelect(e) {

    if (!e.target.files) {
      selDiv.innerHTML = '';
      return;
    }
    selDiv.innerHTML = "";
    var files = e.target.files;
    console.log(e.target.files);

    var displayHeader = showUploadButton(files.length);
    // header
    var tableHeader = createHTMLelement('thead');
    tableHeader.className += ' thead-inverse';
    var headertr = createHTMLelement('tr');
    //headertr.style.display = 'block';
    var indextd = createHTMLelement('th');
    var nametd = createHTMLelement('th');
    var sizetd = createHTMLelement('th');
    indextd.className += 'th-align-text-center';
    nametd.className += 'th-align-text-center';
    sizetd.className += 'th-align-text-center';


    indextd.append('#');
    nametd.append('File Name');
    sizetd.append('Size');

    headertr.append(indextd);
    headertr.append(nametd);
    headertr.append(sizetd);
    tableHeader.append(headertr);
    selDiv.append(tableHeader);

    var tbody = createHTMLelement('tbody');
    selDiv.append(tbody);


    // Items
    Object.keys(files).map(function(objectKey, index) {
      var f = files[objectKey];
      // destiny objects
      var row = document.createElement('TR');
      var indextd = document.createElement('TD');
      var nametd = document.createElement('TD');
      var sizetd = document.createElement('TD');


      // assign child
      indextd.append(parseInt(objectKey) + 1);
      nametd.append(f.name);
      sizetd.append(((parseInt(f.size) / 1024).toFixed(1)).toString() + 'kb');

      // Append to principal row
      row.append(indextd);
      row.append(nametd);
      row.append(sizetd);


      tbody.append(row);
    });

  }

  function createHTMLelement(type) {
    return document.createElement(type.toUpperCase());
  }

  function deleteFile() {

  }
}())
