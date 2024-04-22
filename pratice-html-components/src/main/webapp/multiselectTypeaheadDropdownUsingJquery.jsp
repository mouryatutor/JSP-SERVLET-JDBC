<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Home</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.18/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tokenfield/0.12.0/css/bootstrap-tokenfield.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tokenfield/0.12.0/css/tokenfield-typeahead.min.css">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.18/js/bootstrap-select.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tokenfield/0.12.0/bootstrap-tokenfield.min.js"></script>
</head>
<body>
	<h1>Hello World!</h1>
	<c:if test="${not empty param.name}">
		<p>Name: ${param.name}</p>
	</c:if>

    <div class="" style="width: 300px; margin-right: 40px;">
        <select class="selectpicker" multiple data-live-search="true" data-tokenfield="true">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
            <option value="elderberry">Elderberry</option>
            <option value="fig">Fig</option>
            <option value="grape">Grape</option>
            <option value="honeydew">Honeydew</option>
            <option value="kiwi">Kiwi</option>
            <option value="lemon">Lemon</option>
            <option value="mango">Mango</option>
            <option value="nectarine">Nectarine</option>
            <option value="orange">Orange</option>
            <option value="pear">Pear</option>
            <option value="pineapple">Pineapple</option>
            <option value="plum">Plum</option>
            <option value="raspberry">Raspberry</option>
            <option value="strawberry">Strawberry</option>
            <option value="watermelon">Watermelon</option>
          </select>
    </div>

</body>
<script>
    $(document).ready(function() {
        $('.selectpicker').selectpicker();
    });
</script>
</html>
