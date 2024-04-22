<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="/path/to/js/MSelectDBox.js"></script>
</head>
<body>
	<h1>Hello World!</h1>
	<c:if test="${not empty param.name}">
		<p>Name: ${param.name}</p>
	</c:if>

    <div style="width: 300px;margin-right: 40px;">
        <input id="example" type="text">
    </div>

</body>
<script>
    $("#example").mSelectDBox({
     "list": [
        "Apple",
        "Banana",
        "Orange",
        "Grape",
        "Watermelon",
        "Strawberry"
     ] 
    });
</script>
</html>
