
down vote
Below code will build the needful automatic calculator.

<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
function calculate(ele)
{
    var result = ((ele / 20) * 0.585) * 0.30;
    document.getElementById("output1").value = result;
}
</script>

<style type="text/css">
body                    { font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; margin:0; padding:0; }
.container              { background:#0CC; border:1px dotted #bbb; margin:40px auto 0 auto;  padding: 20px; width:500px; }
h1                      { font-family:Georgia, "Times New Roman", Times, serif; font-style:italic; font-weight:bold; text-align:center; text-decoration:underline;  }
input                   { border:1px solid #eee; }
.container p label      { width:100px; float:left; }
p                       { clear:both; }
</style>
</head>
<body>

<form name="testing" method="post" action="">
<div class="container">
    <h1> My Calculator</h1>
    <p><label>Input : </label><input type="number" name="input1" value="" onBlur="calculate(this.value);"/></p>
    <p><label>Output : </label><input type="number" name="output1" id="output1"></p>
</div>
</form>


</body>
</html>