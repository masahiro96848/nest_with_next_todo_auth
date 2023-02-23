import { useTodoEditTemplate } from './useTodoEditTemplate'
import { useTodoContext } from '../../../contexts/TodoContext'
import { BaseLayout } from '../../organisms/BaseLayout'
import { InputForm } from '../../atoms/InputForm'
import { TextArea } from '../../atoms/TextArea'
import { CommonButton } from '../../atoms/CommonButton'

export const TodoEditTemplate = () => {
    const { originTodoList, updateTodo } = useTodoContext()

    const [
        { todo, inputTitle, inputContent },
        { handleChangeTitle, handleChangeContent, handleUpdateTodo },
    ] = useTodoEditTemplate({ originTodoList, updateTodo })

    return (
        <BaseLayout title={'Todo Edit'}>
            {!!todo && (
                <div className="container">
                    <form className="" onSubmit={handleUpdateTodo}>
                        <div className="area">
                            <InputForm
                                value={inputTitle}
                                placeholder={'title'}
                                onChange={handleChangeTitle}
                            />
                        </div>
                        <div className="area">
                            <TextArea
                                value={inputContent}
                                placeholder={'content'}
                                onChange={handleChangeContent}
                            />
                        </div>
                        <div className="area">
                            <CommonButton type="submit" title="submit" />
                        </div>
                    </form>
                </div>
            )}
        </BaseLayout>
    )
}
