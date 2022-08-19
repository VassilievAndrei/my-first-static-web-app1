module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const helloVar = process.env.HelloWoldVar;

    context.res.json({
        text: "Config var " + helloVar
    });
}

