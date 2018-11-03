<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Kraken - Document Management</title>

    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Custom fonts for this template -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ url('css/app.css') }}" rel="stylesheet">

    <!-- Grab Region Env Variable -->
    <script>
        localStorage.setItem('REGION', '{{ env('REGION', 'US') }}');
    </script>
</head>
<body>

<div id="app">

    @yield('content')

</div>


</body>
</html>
