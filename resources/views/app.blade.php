<!DOCTYPE html>
<html class='scroll-smooth' lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <style>
        * {
            font-family: "Poppins", sans-serif !important;
        }
    </style>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead

    <script>
        let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        updateMode()
        darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
        window.addEventListener('storage', updateModeWithoutTransitions)

        function updateMode() {
            let isSystemDarkMode = darkModeMediaQuery.matches
            let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) &&
                isSystemDarkMode)

            if (isDarkMode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }

            if (isDarkMode === isSystemDarkMode) {
                delete window.localStorage.isDarkMode
            }
        }

        function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
                document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
        }

        function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()
        }
    </script>
</head>

<body class="font-sans text-[.915rem] tracking-tight antialiased">
    @inertia
</body>

</html>
