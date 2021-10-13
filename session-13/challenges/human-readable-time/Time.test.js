import { time } from "./Time";

describe("Human Readable Time", () => {
    it ("Should return 00:00:seconds if given less than 60 seconds", () => {
        expect(time(59)).toBe("00:00:59")
    })

    it.each([
        [7, "00:00:07"],
        [12, "00:00:12"],
        [183, "00:03:03"],
        [1049, "00:17:29"],
        [5549, "01:32:29"],
        [41348, "11:29:08"]
    ])(`given %s seconds should return %i`, (input, expected) => {
        const result = time(input);
        expect(result).toBe(expected);
    })
})