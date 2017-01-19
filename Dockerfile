FROM mhart/alpine-node:5.11
MAINTAINER Marc J. Greenberg <codemarc@gmail.com>

# install dependencies
COPY package.json ./
RUN npm install

# add ssh and set the timezone.
ENV TZ=America/New_York
RUN apk update && \
	apk add -U tzdata && \
	cp /usr/share/zoneinfo/US/Eastern /etc/localtime && \
	echo "America/New_York" > /etc/timezone && \
    rm -rf /var/cache/apk/*

# copy the rest of the stuff over
COPY *.js ./

CMD ["node", "test"]
