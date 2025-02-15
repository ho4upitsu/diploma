const executeCode = async (req, res) => {
    const { code } = req.body;
    const piston = await import("piston-client");

    const client = piston.default({ server: "https://emkc.org" });
    const result = await client.execute("javascript", `${code}`);
    console.log(result);

    if (result.run.stdout) {
        return res.status(200).json(result.run.stdout);
    }

    return res.status(400).json(result.run.stderr);
};

module.exports = { executeCode };
