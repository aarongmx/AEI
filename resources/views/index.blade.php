<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Comunidad AEI</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <body>
        <div id="app">
            <App />
        </div>
        <script src="{{ asset('js/app.js') }}" charset="utf-8"></script>
    </body>
</html>
