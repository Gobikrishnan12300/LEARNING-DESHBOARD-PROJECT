const loggermiddleware (req, res, next) => {
    const date = new date();
    console.log(req.method);
    console.log(req.url)
    console.log(date);
    
};

app.use(loggermiddleware);
