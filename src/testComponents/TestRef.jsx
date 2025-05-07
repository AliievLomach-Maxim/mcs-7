import { useEffect, useRef } from 'react'

const TestRef = () => {
  const inputRef = useRef()

  console.log('inputRef', inputRef)

  useEffect(() => {
    console.log('inputRef', inputRef)
  }, [])

  const handleClick = () => {
    const res = inputRef.current.getBoundingClientRect()
    scrollTo({
      top: res.top,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <button onClick={handleClick}>Go to input</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium voluptatibus rerum
        ullam earum maiores dolores adipisci harum facilis animi nisi expedita error quis
        voluptates, officia, eius eaque placeat. Perferendis. Assumenda rem facere incidunt
        obcaecati asperiores dolorem nam quae voluptas nihil accusantium et, magni ducimus? Earum,
        odit veritatis. Nulla quidem minima, quisquam delectus tempora quod reiciendis? Consequuntur
        omnis soluta placeat? Repellat temporibus doloremque perferendis ratione quis totam, nemo
        quod porro similique minus sed, incidunt placeat. Ad aut vel fugit, sed vitae quam labore
        iusto. Suscipit iure a obcaecati vel aliquam. Quia porro pariatur harum. Suscipit molestias
        ad, ducimus hic expedita ratione odio recusandae, vero fuga est fugit provident
        exercitationem quae animi, esse excepturi rerum unde porro eligendi eveniet minima?
        Veritatis. Dolore illo nihil saepe adipisci ipsa doloremque quia minima esse. Ut ullam
        doloribus laborum, architecto quaerat enim fugiat numquam dolor nisi necessitatibus dicta
        recusandae quis. Repudiandae aspernatur autem corrupti ullam. Rem quibusdam eveniet expedita
        itaque veritatis natus facilis harum voluptatum quisquam ullam dolore voluptate facere,
        veniam labore laboriosam, asperiores fugiat dolorem, laborum deserunt atque maxime cum eius.
        Earum, tempore rem. Fugiat maxime corrupti, pariatur dolorum sunt sit voluptatum omnis
        possimus architecto deleniti aut maiores doloremque, officia voluptatibus eum saepe iure
        inventore doloribus nihil error animi illo delectus, nulla dicta! Modi. Reprehenderit culpa
        harum mollitia voluptatem! Totam inventore quisquam odit aut ea veritatis voluptatem ad nisi
        in laudantium! Dicta, unde quibusdam quam, sed harum commodi recusandae odit aliquam
        aspernatur, saepe iure! Molestias, esse pariatur illum explicabo optio itaque magni est
        facilis? Praesentium et numquam fugit consectetur, aliquam necessitatibus eveniet vitae
        placeat minus! Beatae explicabo cupiditate molestias temporibus consequuntur praesentium
        itaque doloremque? Voluptatibus quo impedit fugit qui eos, sed, nulla recusandae aut nisi
        amet illo. Id non deserunt aliquid, ad soluta magnam. Dolore dignissimos magnam, vel
        deleniti sequi iure libero sit pariatur. Laudantium quisquam, cumque libero adipisci ad,
        alias itaque amet perspiciatis odio corporis harum! Corporis sint deleniti modi tempora
        architecto, qui culpa provident aliquid sed itaque a soluta nobis incidunt quaerat. Omnis
        adipisci repudiandae repellendus provident aliquam nesciunt et accusamus quis, voluptatem
        quaerat eius, assumenda sed ipsam eaque atque consequuntur consectetur nihil nam! Inventore,
        ex. Dolorem debitis officia harum laboriosam aut. A quisquam voluptates iusto? Itaque ex
        sint voluptas cumque. Consequuntur rem nulla sequi deserunt exercitationem dolore, quasi ab
        itaque, architecto ex officia magni vero, quae quos omnis id rerum quod? Saepe,
        exercitationem quaerat distinctio eos impedit voluptates mollitia, harum pariatur veritatis
        neque facilis fugit soluta, eligendi esse ex numquam sed laborum ullam odio! Facere quis
        molestias explicabo qui soluta ex? Ullam quis expedita voluptatibus exercitationem libero
        dicta. Fuga doloremque aliquam quas velit laborum quod repudiandae! Blanditiis et quidem
        velit impedit autem cum perspiciatis, qui obcaecati ratione, doloribus sequi rem. Maiores.
        Laudantium ullam temporibus tempore modi reprehenderit dicta saepe officiis autem beatae
        recusandae fuga exercitationem soluta eaque fugit sed quo iusto alias labore neque veniam,
        asperiores, deleniti aliquid! Vero, eos maxime! Blanditiis consequuntur, amet, eveniet,
        explicabo placeat eum ratione cumque laboriosam quis totam deserunt ipsam ducimus reiciendis
        quas quod dignissimos ipsum nostrum! Obcaecati veniam ea molestias aspernatur, officiis
        consectetur illum debitis? Non, tempora placeat! Cupiditate, optio voluptas. Sed quasi
        tenetur sapiente magni voluptas, earum ratione officia assumenda dignissimos id quidem?
        Vitae accusamus corporis laborum id qui similique magnam quos minima perspiciatis. Ipsa
        earum provident dolorem, tenetur similique accusamus quia voluptas dignissimos nesciunt
        architecto, suscipit maxime illum? Facere at rem delectus recusandae cumque non molestias
        adipisci temporibus voluptas nisi, quam ipsum corrupti. Optio at fuga rerum veritatis,
        numquam rem alias itaque atque modi quo voluptatum ipsa neque in non veniam eaque, nihil,
        repellendus eos officia! Vel recusandae adipisci libero sint modi iste.
      </p>
      <input type='text' ref={inputRef} />
    </div>
  )
}

export default TestRef
