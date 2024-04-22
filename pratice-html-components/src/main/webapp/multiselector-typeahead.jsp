<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
</head>
<body>
	<h1>Hello World!</h1>
	<c:if test="${not empty param.name}">
		<p>Name: ${param.name}</p>
	</c:if>

    <div class="" style="width: 300px; margin-right: 40px;">
        <input type="text" id="multi-select-input" list="options" multiple>
        <datalist id="options">
            <option>Option 1 <input type="checkbox" name="" value="option 1" id=""></option>
            <option>Option 2 <input type="checkbox" name="" value="option 2" id=""></option>
            <option>Option 3 <input type="checkbox" name="" value="option 3" id=""></option>
        </datalist>
    </div>
</body>
<script>
    const input = document.getElementById('multi-select-input');
    const datalist = document.getElementById('options');
  
    input.addEventListener('input', function() {
      const filter = input.value.toUpperCase();
      for (let i = 0; i < datalist.options.length; i++) {
        const option = datalist.options[i];
        if (option.value.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      }
    });
  </script>
</html>
