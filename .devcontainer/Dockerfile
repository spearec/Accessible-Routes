FROM node:18.17.0

# Create the directory for the app
RUN mkdir -p "/usr/src/app"
WORKDIR "/usr/src/app"

# Mount the source code at this volume
# Mount instead of copy allows the auto-reload to work
VOLUME "/usr/src/app"
