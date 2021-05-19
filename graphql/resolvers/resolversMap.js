import mutation from "./mutation";
import query from "./query";
import type from "./type";

const resolvers = {
    ...query,
    ...mutation,
    ...type,
}

export default resolvers;