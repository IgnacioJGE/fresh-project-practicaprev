




export default function Log(){
return(
    <div>
        <h1>LOGIN</h1>
        <form action="/login" method="POST">
            <p>Email:</p>
            <input type="email" name="email" value=""  placeholder="example@ex.es"></input>
            <p>Password:</p>
            <input type="password" name="password" value=""placeholder="******"></input>
            <button type="submit">Login</button>

        </form>
    </div>

);
}