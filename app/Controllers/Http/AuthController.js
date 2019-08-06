'use strict'

class AuthController {
   /**
   * Store a session.
   */
  async store ({ auth, request, response, session }) {
    /**
     * Getting needed parameters.
     *
     * ref: http://adonisjs.com/docs/4.0/request#_all
     */
    const { email, password } = request.all()

    /**
     * Wrapping the authentication in order to
     * handle errors when authentication fail.
     *
     * ref: http://adonisjs.com/docs/4.1/authentication#_attempt_uid_password
     */
    try {
      var auth = await auth
        .withRefreshToken()
        .attempt(email, password)
    } catch (e) {
      return { error: 'We cannot find any account with these credentials.' }
    }

    /**
     * We are authenticated.
     */
    return auth
  }

}

module.exports = AuthController
