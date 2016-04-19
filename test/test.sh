echo "Testing Koffie (LESS)";
./node_modules/less/bin/lessc --verbose './test/test.less' './test/test-less.css'

echo "Testing Koffie (Stylus)";
./node_modules/stylus/bin/stylus './test/test.styl' -o './test/test-stylus.css'
