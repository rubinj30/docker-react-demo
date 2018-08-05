echo "starting build: $(date)"
# rm -rf node_modules # If you want to ensure dependencies, install fresh
# yarn --prod # Only need your production dependencies
yarn build # Create production buid (requires node_modules to be present)
docker build -t docker-react-demo:build . # Create your container
rm -rf build # Remove your build afterwards
echo "Build complete. $(date)"