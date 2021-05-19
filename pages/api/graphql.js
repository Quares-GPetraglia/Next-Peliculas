import schema from '../../graphql/schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default schema.createHandler({
  path: '/api/graphql'
})